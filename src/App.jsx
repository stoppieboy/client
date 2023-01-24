import './App.css'
import Clock from './Components/Clock.jsx'
import Toggle from './Components/Toggle.jsx'
import LoginControl from './Components/LoginControl.jsx';
import Calculator from './Components/Calculator.jsx';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';

function App(){
    // const {collapseSidebar} = useProSidebar();
    return(
        <div>
            {/* <Sidebar>
                <Menu>
                    <SubMenu>
                        <MenuItem> Pie Charts </MenuItem>
                        <MenuItem> Line Charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
            <button onClick={()=>collapseSidebar()}>Collapse</button> */}
            <Clock></Clock>
            <Toggle></Toggle>
            <LoginControl></LoginControl>
            <Calculator></Calculator>
        </div>
    );
}

export default App;