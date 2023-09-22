import Image from "next/image";
import { Inter } from "next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { setDefaultHighWaterMark } from "stream";
import {
  SelectChangeEvent,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { FormControl } from "react-bootstrap";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid white`,
  color: "white",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#666666",
  padding: "0rem 1rem",
  flexDirection: "row-reverse",
  borderRadius: "0.2rem",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    backgroundColor: "blue",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  padding: "1.7rem 0",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Position() {
  const sizeImage = 130;
  return (
    <div className="w-full text-black flex flex-col gap-5 xl:text-lg">
      <div>Choose the display style of the cookie consent banner.</div>
      <div className="flex gap-2">
        <div className="border p-1 flex transition rounded flex-col gap-3 hover:border-red-500 items-center">
          <Image
            src="/tooltip.png"
            alt="tooltip-image"
            width={sizeImage}
            height={sizeImage}
          />
          <div className="text-blue-500 text-lg cursor-pointer">Tooltip</div>
        </div>
        <div className="border px-1 pb-2.5 flex flex-col gap-3 rounded hover:border-red-500 transition items-center">
          <Image
            src="/tooltip.png"
            alt="tooltip-image"
            width={sizeImage}
            height={sizeImage}
          />
          <div className="text-blue-500 text-lg cursor-pointer">Bar</div>
        </div>
      </div>
      <div>Choose where you would like to display it.</div>
      <div className="flex gap-5">
        <button className="flex-1 py-2 rounded hover:bg-gray-200 transition bg-gray-100">
          Bottom left
        </button>
        <button className="flex-1 rounded hover:bg-gray-200 transition bg-gray-100">
          Bottom right
        </button>
        <button className="flex-1 rounded hover:bg-gray-200 transition bg-gray-100">
          Top left
        </button>
        <button className="flex-1 rounded hover:bg-gray-200 transition bg-gray-100">
          Top right
        </button>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex text-black flex-wrap gap-7 xl:text-lg">
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Border</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20 py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">None</option>
          <option value="saab">Thin</option>
          <option value="mercedes">Normal</option>
          <option value="audi">Thick</option>
        </select>
      </div>
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Corners</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20 py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">None</option>
          <option value="saab">Thin</option>
          <option value="mercedes">Normal</option>
          <option value="audi">Thick</option>
        </select>
      </div>
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Padding</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20 py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">None</option>
          <option value="saab">Thin</option>
          <option value="mercedes">Normal</option>
          <option value="audi">Thick</option>
        </select>
      </div>
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Margin</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20 py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">None</option>
          <option value="saab">Thin</option>
          <option value="mercedes">Normal</option>
          <option value="audi">Thick</option>
        </select>
      </div>
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Transparency</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20 py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">5%</option>
          <option value="saab">10%</option>
          <option value="mercedes">15%</option>
          <option value="audi">20%</option>
          <option value="audi">25%</option>
        </select>
      </div>
      <div className="flex md:flex-1 flex-col gap-2">
        <div>Font size</div>
        <select
          className="bg-white border w-fit border-black border-opacity-20  py-2 pl-2"
          name="cars"
          id="cars"
        >
          <option value="volvo">Tiny</option>
          <option value="saab">Small</option>
          <option value="mercedes">Default</option>
          <option value="audi">Large</option>
        </select>
      </div>
    </div>
  );
}

function ColorsImage({ src }: { src: string }) {
  return (
    <div className="border p-1 rounded hover:border-red-500 transition">
      <Image src={src} alt="image" width={55} height={55} />
    </div>
  );
}
function Colors() {
  return (
    <div className="flex flex-col text-black xl:text-lg gap-4">
      <div>Choose the color palette or specify your own colors.</div>
      <div className="w-full gap-2 flex flex-wrap">
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
        <ColorsImage src="/color-1.png" />
        <ColorsImage src="/color-2.png" />
      </div>
      <div className="text-blue-500 cursor-pointer">Customize colors</div>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="text-black xl:text-lg flex flex-col gap-2">
      <div>URL to your cookie policy</div>
      <input
        className="w-full p-2 border placeholder:text-slate-300 hover:border-blue-500 outline-none transition rounded-sm"
        type="text"
        placeholder="https://www.yoursite.com/cookie-policy/"
      />
      <div className="text-sm xl:text-base">
        Don{"'"}t have a cookie policy?{" "}
        <span className="text-blue-500 cursor-pointer">Create one now</span>, it
        {"'"}s free!
      </div>
    </div>
  );
}

function CustomText() {
  return (
    <div className="flex flex-col gap-4 xl:text-lg text-black">
      <div>
        Customize the text displayed on the cookie consent banner or use default
        text.
      </div>
      <div className="flex flex-col gap-3">
        <div>Main message</div>
        <textarea
          className="p-2 border placeholder:text-slate-300"
          placeholder="This website uses cookies to ensure you get the best experience on our website."
        ></textarea>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-7">
        <div className="flex flex-col gap-3 w-full">
          <div>Policy link text</div>
          <input
            className="p-2 border placeholder:text-slate-300"
            placeholder="Learn more"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div>Dismiss button text</div>
          <input
            className="p-2 border placeholder:text-slate-300"
            placeholder="Got it!"
          />
        </div>
      </div>
    </div>
  );
}

function CopyTheCode() {
  return (
    <div className="flex flex-col gap-7 xl:text-lg text-black">
      <div>
        Copy the code below to the HTML header section of your website, just
        above the {"</head>"} tag.
      </div>
      <div
        style={{ fontFamily: "monospace" }}
        className="border p-2 leading-10 bg-slate-100 bg-opacity-50 rounded-sm break-all text-sm xl:text-base"
      >
        {
          '<script src="https://cdn.websitepolicies.io/lib/cconsent/cconsent.min.js" defer></script><script>window.addEventListener("load",function(){window.wpcb.init({"colors":{"popup":{"background":"#222222","text":"#ffffff","border":"#d9baea"},"button":{"background":"#d9baea","text":"#000000"}},"corners":"large","border":"thick"})});</script>'
        }
      </div>
      <div className="flex gap-4 text-white">
        <button className="px-4 py-2 btn-preview rounded">Copy code</button>
        <button className="px-4 py-2 btn-preview rounded">Preview</button>
      </div>
      <div
        style={{ backgroundColor: "#F6F9FC" }}
        className="p-5 flex flex-col gap-5 border-dashed border-t-2 border-red-500 border-b-2 border-opacity-30"
      >
        <div className="text-2xl font-bold">
          Lawyers are{" "}
          <span className="border-b-2 border-orange-500 border-opacity-50">
            EXPENSIVE.
          </span>{" "}
          Our updates are{" "}
          <span className="border-b-2 border-green-600 border-opacity-70">
            FREE!
          </span>
        </div>
        <div>
          Stay up to date with the latest legal requirements and regulations,
          and avoid costly mistakes.
        </div>
        <button className="uppercase w-fit bg-orange-400 rounded-sm text-sm hover:bg-opacity-100 xl:text-base text-white bg-opacity-80 font-bold px-3 py-1">
          Subscribe now
        </button>
      </div>
    </div>
  );
}

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className="xl:text-lg">1. Position</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Position />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography className="xl:text-lg">2. Layout</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Layout />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography className="xl:text-lg">3. Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Colors />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography className="xl:text-lg">4. Coolie policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CookiePolicy />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography className="xl:text-lg">5. Custom text</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomText />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          className="hover:opacity-80 transition"
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography className="xl:text-lg">6. Copy the code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CopyTheCode />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between py-3.5 md:py-7 lg:px-8 xl:px-14 px-4">
      <div className="max-w-xs">
        <Image src="/web-logo.png" alt="logo" width={180} height={12} />
      </div>
      <div className="btns flex gap-1 max-md:hidden">
        <button className="btn-login">Log in</button>
        <button className="btn-signup transition">Sign up</button>
      </div>
      <div className="md:hidden menu-icon">
        <MenuIcon style={{ fontSize: "1.4rem" }} />
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div className="flex w-full flex-col mt-12 bg-white text-slate-500 text-sm px-4">
      <hr className="border border-gray-200 border-opacity-70" />
      <div className="flex gap-4 py-4 lg:justify-end">
        <div className="order-1 lg:order-2">Contact us</div>
        <div className="order-2 lg:order-3">Legal</div>
        <div className="order-3 lg:order-1">WebsitePolicies © 2023</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={`main w-screen flex flex-col bg-white`}>
      <Navbar />
      <div className="flex flex-col gap-7 text-black pt-12 lg:px-8 px-4 xl:px-14">
        <div className="font-bold text-3xl xl:text-4xl">
          Create a cookie consent banner
        </div>
        <div className="leading-7 xl:text-lg">
          Comply with GDPR and EU cookie law with our free cookie consent banner
          plugin. Simply go through the steps below to customize it and copy the
          code to your site. Click on the {'"'}Preview{'"'} button at any time
          to see how it looks.{" "}
        </div>
        <button className="w-fit btn-preview xl:text-lg text-white px-4 py-2 rounded-sm  transition">
          Preview cookie consent banner
        </button>
        <div>
          <div className="flex flex-col gap-4">
            <div
              // style={{ fontSize: "1.4rem", fontWeight: 800 }}
              className="text-2xl font-bold"
            >
              Configuration wizard
            </div>
            <CustomizedAccordions />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
