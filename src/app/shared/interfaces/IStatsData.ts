import { IStatewise } from '../interfaces/IStatewise';
import { ITested} from '../interfaces/ITested';
import { Icase_time_series} from '..//interfaces/ICases_time_series';
export interface IStatsData{
    statewise:IStatewise[];
    tested:ITested[];
    case_time_series:Icase_time_series;

}