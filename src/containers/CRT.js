import { BrowserRouter, Switch, Route } from "react-router-dom";
import Directory from "../components/Directory";
import Bio from "../components/Bio";
import Work from "../components/Work";
import Skillset from "../components/Skillset";
import Communications from "../components/Communications";
import "../css/App.css";

function CRT() {
  return (
    <div className="CRT">
      <BrowserRouter>
        <Switch>
          <div className="Screen">
            <Route exact path={"/"} component={Directory} />
            <Route path={"/who-am-i"} component={Bio} />
            <Route path={"/work"} component={Work} />
            <Route path={"/skillset"} component={Skillset} />
            <Route path={"/communications"} component={Communications} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default CRT;
