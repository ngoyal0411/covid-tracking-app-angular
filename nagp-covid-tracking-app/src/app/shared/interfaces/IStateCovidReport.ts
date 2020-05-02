import { ICasesTimeSeries } from './ICasesTimeSeries';
import { IStateWiseDetail } from './IStateWiseDetail';
import { ICovidTestReport } from './ICovidTestReport';

export interface IStateCovidReport {
    cases_time_series: Array<ICasesTimeSeries>;
    statewise: Array<IStateWiseDetail>;
    tested: Array<ICovidTestReport>;
}