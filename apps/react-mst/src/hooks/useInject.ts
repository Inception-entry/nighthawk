import { useStore } from "../components/StoreProvider";
import { RootStoreModel } from "../models/RootStore";

export type MapStore<T> = (store: RootStoreModel) => T

const useInject = <T>(mapStore: MapStore<T>) => {
  const store = useStore()
  return mapStore(store)
}

export default useInject
