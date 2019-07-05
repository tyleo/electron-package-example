export const AsyncRequiredFile = async (): Promise<
  typeof import("./AsyncRequiredFile_")
> => import(/* webpackChunkName: "AsyncRequiredFile" */ "./AsyncRequiredFile_");
