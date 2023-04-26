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
import Table5 from '@/components/Target/New/Table5';
import Table6 from '@/components/Target/New/Table6';
import Table6Total from '@/components/Target/New/Table6Total';
import ModelsTable2 from '@/components/Target/New/ModelsTable2';
import ModelsTable from '@/components/Target/New/ModelsTable';
import TransactionDetailTableCard from '@/components/Target/New/TransactionDetailTableCard';
import RetailSalesTableCard from '@/components/Target/New/RetailSalesTableCard';
import SingleButton from '@/components/General/Buttons/SingleButton';
import BasicInformation from '@/components/Target/Preset/BasicInformation';
import CancelAndSave from '@/components/Target/CancelAndSave.jsx';


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
					path="/percentagebigslider"
					element={<PercentageBigSlider />}
				/>
				<Route exact path='/nameslidercard' element={<NameSliderCard />} />
				<Route exact path='/targetpresetsslider' element={<TargetPresetsSlider />} />
				<Route exact path='/checknamesliderbuttoncard' element={<CheckNameSliderButtonCard />} />
				<Route exact path='/nameslider' element={<NameSlider />} />
				<Route exact path='/totaluniquevisitorscard_1' element={<TotalUniqueVisitorsCard_1 />} />
				<Route exact path='/totaluniquevisitorscard_2' element={<TotalUniqueVisitorsCard_2 />} />
				<Route exact path='/slider' element={<Slider />} />
				<Route exact path='/titlevectorx' element={<TitleVectorX />} />
				<Route exact path='/departmentcard' element={<DepartmentCard />} />
				<Route exact path='/selectionmodelcard' element={<SelectionModelCard />} />
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
				<Route exact path='/table5' element={<Table5 />} />
				<Route exact path='/modelstable2' element={<ModelsTable2 />} />
				<Route exact path='/modelstable' element={<ModelsTable />} />
				<Route exact path='/table6' element={<Table6 />} />
				<Route exact path='/retailsalestablecard' element={<RetailSalesTableCard />} />
				<Route exact path='/transactiondetailtablecard' element={<TransactionDetailTableCard />} />
				<Route exact path='/singlebutton' element={<SingleButton />} />
				<Route exact path='/basicinformation' element={<BasicInformation />} />
				<Route exact path='/cardpreset' element={<CardPreset />}/>
				<Route exact path='/cancelandsave' element={<CancelAndSave />}/>
				<Route exact path='/table6Total' element={<Table6Total />} />

				<Route exact path='/roger-test' element={<ExpensesRetailItem />} />

			</Routes>
		</BrowserRouter>
	);
}
