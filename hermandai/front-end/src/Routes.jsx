import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const GettingthecodeIMG = React.lazy(() => import("pages/GettingthecodeIMG"));
const NavbarTablet = React.lazy(() => import("pages/NavbarTablet"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const FrameTwentyOne = React.lazy(() => import("pages/FrameTwentyOne"));
const Recoverpassword = React.lazy(() => import("pages/Recoverpassword"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const SignupinformationsrequiredProfessionalone = React.lazy(
  () => import("pages/SignupinformationsrequiredProfessionalone"),
);
const Webapp4TOPage = React.lazy(() => import("pages/Webapp4TOPage"));
const SignupinformationsrequiredBussinessone = React.lazy(
  () => import("pages/SignupinformationsrequiredBussinessone"),
);
const MainPagePaymentMethodPopUP = React.lazy(
  () => import("pages/MainPagePaymentMethodPopUP"),
);
const O = React.lazy(() => import("pages/O"));
const WebappSix = React.lazy(() => import("pages/WebappSix"));
const UploadtoTOStandingsOption = React.lazy(
  () => import("pages/UploadtoTOStandingsOption"),
);
const WebappFive = React.lazy(() => import("pages/WebappFive"));
const MainPageAITypePopUp = React.lazy(
  () => import("pages/MainPageAITypePopUp"),
);
const FrameEleven = React.lazy(() => import("pages/FrameEleven"));
const MainPageServicesPopUP = React.lazy(
  () => import("pages/MainPageServicesPopUP"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/mainpageservicespopup"
            element={<MainPageServicesPopUP />}
          />
          <Route path="/frameeleven" element={<FrameEleven />} />
          <Route
            path="/mainpageaitypepopup"
            element={<MainPageAITypePopUp />}
          />
          <Route path="/webappfive" element={<WebappFive />} />
          <Route
            path="/uploadtotostandingsoption"
            element={<UploadtoTOStandingsOption />}
          />
          <Route path="/webappsix" element={<WebappSix />} />
          <Route path="/o" element={<O />} />
          <Route
            path="/mainpagepaymentmethodpopup"
            element={<MainPagePaymentMethodPopUP />}
          />
          <Route
            path="/signupinformationsrequiredbussinessone"
            element={<SignupinformationsrequiredBussinessone />}
          />
          <Route path="/webapp4topage" element={<Webapp4TOPage />} />
          <Route
            path="/signupinformationsrequiredprofessionalone"
            element={<SignupinformationsrequiredProfessionalone />}
          />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/recoverpassword" element={<Recoverpassword />} />
          <Route path="/frametwentyone" element={<FrameTwentyOne />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/navbartablet" element={<NavbarTablet />} />
          <Route path="/gettingthecodeimg" element={<GettingthecodeIMG />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
