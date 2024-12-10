import { create } from "zustand";
import { InitialUser, User } from "../models/user.model";

interface UserStore {
    user: User;
    update: (user: User) => void;
}

const userStore = create<UserStore>((set) => ({
    user: InitialUser,
    update: (user: User) => set({ user }),
}));

export default userStore;
