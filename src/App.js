import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StartScreen from './screen/StartScreen';
import DetailScreen from './screen/DetailScreen';
import ClientSigninScreen from './screen/Signin';
import ClientSignupScreen from './screen/SignUp';
import ClientForgotPasswordScreen from './screen/forgotPassord';
import ContactScreen from './screen/Contact.js';
import GetPremiumScreen from './screen/GetPremium.js';
import ProfileScreen from './screen/Profile.js';
import ClientNewPasswordScreen from './screen/newPassword';
import VerifiedScreen from './screen/verified';
import Dashboard from "./screen/admin/Dashboard"
import RequestPremiumScreen from './screen/admin/RequestPremium';
import AdminMessageScreen from './screen/admin/Message';
import SettingScreen from './screen/admin/Setting';
import UserFileList from './screen/admin/UserFileList';
import User from './screen/admin/User';
import UploadFileScreen from './screen/admin/UploadFile';
import SigninScreen from './screen/auth/Signin';
import AddUserScreen from './screen/auth/AddUser';


function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<StartScreen/>} />
      <Route exact path='/signin' element={<ClientSigninScreen/>} />
      <Route exact path='/signup' element={<ClientSignupScreen/>} />
      <Route exact path='/reset-password' element={<ClientForgotPasswordScreen/>} />
      <Route exact path='/contact' element={<ContactScreen/>} />
      <Route exact path='/frequent-itemset' element={<DetailScreen/>} />
      <Route exact path='/get-premium' element={<GetPremiumScreen/>} />
      <Route exact path='/profile' element={<ProfileScreen/>} />
      <Route exact path='/reset/:token' element={<ClientNewPasswordScreen/>} />
      <Route exact path='/account/confirm/:token' element={<VerifiedScreen/>} />
      
      <Route exact path='/admin/signin' element={<SigninScreen/>}/>
      <Route exact path='/admin/dashboard' element={<Dashboard/>} />
      <Route exact path='/admin/request-premium' element={<RequestPremiumScreen/>} />
      <Route exact path='/admin/message' element={<AdminMessageScreen/>}/>
      <Route exact path='/admin/setting' element={<SettingScreen/>}/>
      <Route exact path='/admin/user-file' element={<UserFileList/>}/>
      <Route exact path='/admin/user' element={<User/>}/>
      <Route exact path='/admin/add-user' element={<AddUserScreen/>}/>
      <Route exact path='/admin/uploadfile' element={<UploadFileScreen/>}/>
      </Routes>
      </BrowserRouter>
      
      </>
      <div>
      
      </div>
     
    </div>
  );
}

export default App;
