import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WithPermissionRouter from '@/routes/WithPermissionRouter';
import Target from '@/pages/Target/Target';
import CardPreset from '@/components/Target/CardPreset';

import Login from '@/pages/Login/Login';
import Recover from '@/pages/Recover/Recover';
import RecoveryLink from '@/pages/Recover/RecoveryLink';
import PercentageBigSlider from '@/components/Target/New/PercentageBigSlider';
import TotalUniqueVisitorsCard_1 from '@/components/Target/New/TotalUniqueVisitorsCard_1';
import TotalUniqueVisitorsCard_2 from '@/components/Target/New/TotalUniqueVisitorsCard_2';
import NameSliderCard from '@/components/Target/NameSliderCard';
import ExpensesRetailItem from '@/components/Target/New/ExpensesRetailItem';
import ChangePassword from '@/pages/Recover/ChangePassword';
import PasswordUpdate from '@/pages/Recover/PasswordUpdate';
import TargetPresetsSlider from '@/components/Target/TargetPresetsSlider';
import NameSlider from '@/components/Target/NameSlider';
import TitleVectorX from '@/components/Target/TitleVectorX';
import DepartmentCard from '@/components/Target/DepartmentCard';
import CheckNameSliderButtonCard from '@/components/Target/CheckNameSliderButtonCard';
import TargetPreset from '@/pages/TargetPreset/TargetPreset';
import TargetAdd from '@/pages/TargetAdd/TargetAdd';
import Slider from '@/components/Target/New/Slider';
import ResumeUserItem from '@/components/Target/New/ResumeUserItem';
import TargetNew from '@/pages/TargetNew/TargetNew';
import ResumeUserCard from '@/components/Target/New/ResumeUserCard';
import SelectionModelCard from '@/components/Target/New/SelectionModelCard';
import CommentsItem from '@/components/Target/New/CommentsItem';
import CommentsCard from '@/components/Target/New/CommentsCard';
import ResultResume from '@/components/Target/New/ResultResume';
import ResultResumeCard from '@/components/Target/New/ResultResumeCard';
import KeyExpensesCard from '@/components/Target/New/KeyExpensesCard';
import GravatarTable from '@/components/Target/New/GravatarTable';
import NewVDPCard from '@/components/Target/New/NewVDPCard';
import PeopleTable from '@/components/Target/New/PeopleTable';
import ToggleSwitch from '@/components/Target/ToggleSwitch';

import TransactionDetailTableCard from '@/components/Target/New/TransactionDetailTableCard';
import RetailSalesTableCard from '@/components/Target/New/RetailSalesTableCard';
import SingleButton from '@/components/General/Buttons/SingleButton';
import BasicInformation from '@/components/Target/Preset/BasicInformation';
import CancelAndSave from '@/components/Target/CancelAndSave.jsx';
import TableToggleIncrease from '@/components/Target/New/TableToggleIncrease';

import Table4 from '@/components/Target/New/Table4';
import Table5 from '@/components/Target/New/Table5';
import Table6 from '@/components/Target/New/Table6';
import Table7 from '@/components/Target/New/Table7';
import Table7Total from '@/components/Target/New/Table7Total';
import Table8 from '@/components/Target/New/Table8';
import Table8Total from '@/components/Target/New/Table8Total';
import ModelsTable2 from '@/components/Target/New/ModelsTable2';
import ModelsTable from '@/components/Target/New/ModelsTable';

import SimpleLineGraphCard from '@/components/General/Graphs/SimpleLineGraphCard';
import BubbleGraphCard from '@/components/General/Graphs/BubbleGraphCard';
import LineChart from '@/components/General/Graphs/LineChart';
import Models from '@/pages/TargetNew/Models';
import Expenses from '@/pages/TargetNew/Expenses';
import CommunityReports from '@/pages/CommunityReports/CommunityReports';

import NotificationGroup from "@/components/General/Contest/NotificationGroup";
import ProgressPieResume from '@/components/General/Contest/ProgressPieResume';
import NotificationsCard from '@/components/General/Contest/NotificationsCard';
import UserInfoResume from '@/components/General/Contest/UserInfoResume';
import BadgeProgressandButtons from '@/components/General/Contest/BadgeProgressandButtons';
import ResumeCard from '@/components/General/Contest/ResumeCard';
import NavBarForm from '@/components/General/Contest/NavBarForm';
import SearchAndSavedSearchs from '@/components/General/PredictiveAI.jsx/SearchAndSavedSearchs';

export default function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path='/target/preset'
					element={
						<WithPermissionRouter>
							<TargetPreset />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/target/preset/add'
					element={
						<WithPermissionRouter>
							<TargetAdd />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/target/new'
					element={
						<WithPermissionRouter>
							<TargetNew />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/target/new/models'
					element={
						<WithPermissionRouter>
							<Models />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/target/new/expenses'
					element={
						<WithPermissionRouter>
							<Expenses />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/'
					element={
						<WithPermissionRouter>
							<Target />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/login'
					element={
						<WithPermissionRouter loggedNeeded={false}>
							<Login />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/recover'
					element={
						<WithPermissionRouter loggedNeeded={false}>
							<Recover />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/recover-link'
					element={
						<WithPermissionRouter loggedNeeded={false}>
							<RecoveryLink />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/recover-change-password/:userId'
					element={
						<WithPermissionRouter loggedNeeded={false}>
							<ChangePassword />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/recover-password-updated'
					element={
						<WithPermissionRouter loggedNeeded={false}>
							<PasswordUpdate />
						</WithPermissionRouter>
					}
				/>
				<Route
					exact
					path='/community-reports'
					element={
						<WithPermissionRouter>
							<CommunityReports />
						</WithPermissionRouter>
					}
				/>


				<Route
					exact
					path='/percentagebigslider'
					element={<PercentageBigSlider />}
				/>
				<Route exact path='/nameslidercard' element={<NameSliderCard />} />
				<Route
					exact
					path='/targetpresetsslider'
					element={<TargetPresetsSlider />}
				/>
				<Route
					exact
					path='/checknamesliderbuttoncard'
					element={<CheckNameSliderButtonCard />}
				/>
				<Route exact path='/nameslider' element={<NameSlider />} />
				<Route
					exact
					path='/totaluniquevisitorscard_1'
					element={<TotalUniqueVisitorsCard_1 />}
				/>
				<Route
					exact
					path='/totaluniquevisitorscard_2'
					element={<TotalUniqueVisitorsCard_2 />}
				/>
				<Route exact path='/slider' element={<Slider />} />
				<Route exact path='/titlevectorx' element={<TitleVectorX />} />
				<Route exact path='/departmentcard' element={<DepartmentCard />} />
				<Route
					exact
					path='/selectionmodelcard'
					element={<SelectionModelCard />}
				/>
				<Route exact path='/resumeuseritem' element={<ResumeUserItem />} />
				<Route exact path='/resumeusercard' element={<ResumeUserCard />} />
				<Route exact path='/commentsitem' element={<CommentsItem />} />
				<Route exact path='/commentscard' element={<CommentsCard />} />
				<Route exact path='/resultresume' element={<ResultResume />} />
				<Route exact path='/resultresumecard' element={<ResultResumeCard />} />
				<Route exact path='/keyexpensescard' element={<KeyExpensesCard />} />
				<Route exact path='/gravatartable' element={<GravatarTable />} />
				<Route exact path='/newvdpcard' element={<NewVDPCard />} />
				<Route exact path='/peopletable' element={<PeopleTable />} />
				<Route
					exact
					path='/retailsalestablecard'
					element={<RetailSalesTableCard />}
				/>
				<Route
					exact
					path='/transactiondetailtablecard'
					element={<TransactionDetailTableCard />}
				/>
				<Route exact path='/singlebutton' element={<SingleButton />} />
				<Route exact path='/basicinformation' element={<BasicInformation />} />
				<Route exact path='/cardpreset' element={<CardPreset />} />
				<Route exact path='/cancelandsave' element={<CancelAndSave />} />
				<Route exact path='/table4' element={<Table4 />} />
				<Route exact path='/table5' element={<Table5 />} />
				<Route exact path='/table6' element={<Table6 />} />
				<Route exact path='/table7' element={<Table7 />} />
				<Route exact path='/table7total' element={<Table7Total />} />
				<Route exact path='/table8' element={<Table8 />} />
				<Route exact path='/table8total' element={<Table8Total />} />
				<Route exact path='/modelstable2' element={<ModelsTable2 />} />
				<Route exact path='/modelstable' element={<ModelsTable />} />
				<Route
					exact
					path='/tabletoggleincrease'
					element={<TableToggleIncrease />}
				/>
				<Route exact path='/toggleSwitch' element={<ToggleSwitch />} />
				<Route
					exact
					path='/simplelinegraph'
					element={<SimpleLineGraphCard />}
				/>
				<Route exact path='/linechart' element={<LineChart />} />
				<Route exact path='/toggleSwitch' element={<ToggleSwitch />} />
				<Route exact path='/bubblegraphcard' element={<BubbleGraphCard/>} />
				<Route exact path='/notificationgroup' element={<NotificationGroup/>} />
				<Route exact path='/progresspieresume' element={<ProgressPieResume/>} />
				<Route exact path='/notificationscard' element={<NotificationsCard/>} />
				<Route exact path='/userinforesume' element={<UserInfoResume/>} />
				<Route exact path='/badgeprogressandbuttons' element={<BadgeProgressandButtons/> } />
				<Route exact path='/resumecard' element={<ResumeCard/>} />
				<Route exact path='/navbarform' element={<NavBarForm/>} />
				<Route exact path='/searchandsavedsearchs' element={<SearchAndSavedSearchs/>} />

				<Route exact path='/roger-test' element={<ExpensesRetailItem />} />
			</Routes>
		</BrowserRouter>
	);
}
