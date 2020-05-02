import { IDistrictData } from './IDistrictData';

export interface IDistrictCovidReportMetaData {
    districtData: Array<IDistrictData>;
    statecode: string;
}