import { createContext } from "react";

export const ParticipantsContext = createContext({
    selectedParticipants: [],
    setSelectedParticipants: () => {}
});

export const BuildingContext = createContext({
    selectedBuildings: [],
    setSelectedBuildings: () => {}
})

export const DateContext = createContext({
    date: "2022-03-01",
    setDate: () => {}
});

