import { Route, Routes } from "react-router-dom";
import { Text } from "@chakra-ui/button";
import App from "./betlar/App";
import About from "./betlar/muddatlitolov";

import Layout from "./layout1";
import Chegirmalar from "./betlar/chegirmalar";
import Yutuqlaroyinlar from "./betlar/Yutuqlio'yinla";
import Saytxaritasi from "./betlar/Saytxaritasi";
import Section from "./betlar/Section";
import Basket from "./Basket/Basket";
import Appphonorsamsung from "./betlar/appp,honor,samsung";
import Ofisjixozlari from "./betlar/ofisjixozlari";
import Tizimuskunlar from "./betlar/Tizimuskunlar";
import Proektor from "./betlar/proektor";
import TeefizorFotovideoaudio from "./betlar/ddd/Teefizor,Foto-video,audio";
import Noutbukprinterkompyuter from "./betlar/ddd/Noutbuk,printer,kompyuter";
import SmartfonTelefonaksessuallar from "./betlar/ddd/Smartfon,Telefon,aksessuallar";
import MaishiyTexnika from "./betlar/ddd/MaishiyTexnika";
import Barchasioshxonauchun from "./betlar/ddd/Barchasi oshxona uchun";
import Sportanjomlari from "./betlar/ddd/Sport anjomlari";
import GozallikvaSalomatlik from "./betlar/ddd/Gozallik va Salomatlik";
import Bolalaruchun from "./betlar/ddd/Bolalaruchun";

function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/muddatlitolov" element={<About />} />
        <Route path="/chegirmalar" element={<Chegirmalar />} />
        <Route path="/Yutuqlioyinlar" element={<Yutuqlaroyinlar />} />
        <Route path="/Saytxaritasi" element={<Saytxaritasi />} />
        <Route path="/about/:id" element={<Section />} />
        <Route path="/muddatlitolov/:id" element={<Appphonorsamsung />} />
        <Route path="/muddatlitolov/:id" element={<Appphonorsamsung />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/ofisjixozlari" element={<Ofisjixozlari />} />
        <Route path="/tizimuskunlar" element={<Tizimuskunlar />} />
        <Route path="/proektor" element={<Proektor />} />
        <Route
          path="/Noutbukprinterkompyuter"
          element={<Noutbukprinterkompyuter />}
        />
        <Route
          path="/TeefizorFotovideoaudio"
          element={<TeefizorFotovideoaudio />}
        />
        <Route
          path="/SmartfonTelefonaksessuallar"
          element={<SmartfonTelefonaksessuallar />}
        />
        <Route path="/MaishiyTexnika" element={<MaishiyTexnika />} />
        <Route
          path="/Barchasioshxonauchun"
          element={<Barchasioshxonauchun />}
        />
        <Route path="/Sportanjomlari" element={<Sportanjomlari />} />
        <Route
          path="/GozallikvaSalomatlik"
          element={<GozallikvaSalomatlik />}
        />
        <Route path="/Bolalaruchun" element={<Bolalaruchun />} />
      </Route>
    </Routes>
  );
}

export default Routers;
