/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DataProps {
  dataValueAirHotel: {
    origin: {
      description?: string;
      IATA?: string;
      type?: string;
      product?: string;
      idproduct?: string;
      city?: string;
      state?: string;
      country?: string;
    };
    destiny: {
      description?: string;
      IATA?: string;
      type?: string;
      product?: string;
      id: number;
      idproduct?: string;
      city?: string;
      state?: string;
      country?: string;
      masterCode: number;
    };
    startDate: string;
    endDate: string;
    roundTrip: boolean;
    passengerEntries: {
      room1: {
        adult: number;
        child: number;
      };
      room2: {
        adult: number;
        child: number;
      };
      room3: {
        adult: number;
        child: number;
      };
      room4: {
        adult: number;
        child: number;
      };
      room5: {
        adult: number;
        child: number;
      };
    };
    agesOfGuests: string;
    rooms: number;
    agesChild: {
      agesChildRoom1: any;
      agesChildRoom2: any;
      agesChildRoom3: any;
      agesChildRoom4: any;
      agesChildRoom5: any;
    };
    hotelIdInSession: string;
    rateTokenHotel: string;
    OneWayFlightRateToken: string;
    ReturnFlightRateToken: string;
  };
  setDataValueAirHotel: (value: any) => void;
}

interface ProviderProps {
  children: ReactNode;
}
const dataContext = createContext({} as DataProps);

const DataContextPackages: React.FC<ProviderProps> = ({ children }) => {
  const [dataValueAirHotel, setDataValueAirHotel] = useState(() => {
    if (typeof window !== "undefined") {
      const PackagesEngine = sessionStorage.getItem("Packages");

      if (PackagesEngine) {
        return JSON.parse(PackagesEngine);
      } else {
        return {
          origin: {
            description: "",
            IATA: "",
            type: "",
            product: "",
            idproduct: "",
            city: "",
            state: "",
            country: "",
          },
          destiny: {
            description: "",
            IATA: "",
            type: "",
            product: "",
            idproduct: "",
            city: "",
            state: "",
            country: "",
            masterCode: 0,
          },
          startDate: "",
          endDate: "",
          roundTrip: true,
          passengerEntries: {
            room1: {
              adult: 2,
              child: 0,
            },
            room2: {
              adult: 1,
              child: 0,
            },
            room3: {
              adult: 1,
              child: 0,
            },
            room4: {
              adult: 1,
              child: 0,
            },
            room5: {
              adult: 1,
              child: 0,
            },
          },
          rooms: 1,
          agesOfGuests: "30,30",
          agesChild: {
            agesChildRoom1: [],
            agesChildRoom2: [],
            agesChildRoom3: [],
            agesChildRoom4: [],
            agesChildRoom5: [],
          },
          hotelIdInSession: "",
          rateTokenHotel: "",
          OneWayFlightRateToken: "",
          ReturnFlightRateToken: "",
        };
      }
    }
  });
  return (
    <dataContext.Provider value={{ dataValueAirHotel, setDataValueAirHotel }}>
      {children}
    </dataContext.Provider>
  );
};

export const usedata = () => {
  const context = useContext(dataContext);
  const { dataValueAirHotel, setDataValueAirHotel } = context;

  return { dataValueAirHotel, setDataValueAirHotel };
};

export default DataContextPackages;
