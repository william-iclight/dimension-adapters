import { FetchResultFees, SimpleAdapter } from "../adapters/types";
import { CHAIN } from "../helpers/chains";
import { getDexFeesExports } from "../helpers/dexVolumeLogs";

const FACTORY_ADDRESS = '0xc6366efd0af1d09171fe0ebf32c7943bb310832a';

const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.FANTOM]: {
      fetch: getDexFeesExports({ chain: CHAIN.FANTOM, factory: FACTORY_ADDRESS }),
      start: async () => 1670544000,
    },
  }
};

export default adapter;
