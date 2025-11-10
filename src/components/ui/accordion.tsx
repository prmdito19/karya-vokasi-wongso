import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const data = [
    { key: "panel1", number: "01", title: "Kolaborasi Ekosistem", content: "Kolaborasi Ekosistem." },
    { key: "panel2", number: "02", title: "Sertifikasi Resmi", content: "Sertifikasi Resmi." },
    { key: "panel3", number: "03", title: "Kurikulum Berbasis Industri", content: "Kurikulum Berbasis Industri." },
    { key: "panel4", number: "04", title: "Fleksibel dan Inklusif", content: "Fleksibel dan Inklusif." },
    { key: "panel5", number: "05", title: "Dukungan Mitra dan Vokasi Industri", content: "Dukungan Mitra dan Vokasi Industri." },
    { key: "panel6", number: "06", title: "Siap Kerja, Siap Karir", content: "Siap Kerja, Siap Karir." },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-8 lg:px-8 ">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col items-center">
        {data.map((item) => (
          <Accordion
            key={item.key}
            expanded={expanded === item.key}
            onChange={handleChange(item.key)}
            className={`w-[1000px] max-w-full sm:w-[600px] md:w-[800px] lg:w-[900px] xl:w-[1200px] 
                        !bg-white !shadow-none mb-10`}
            disableGutters
            elevation={0}
            square
            sx={{ "&:before": { display: "none" } }}
          >
            <AccordionSummary
              expandIcon={
                expanded === item.key ? (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                    <CloseIcon fontSize="small" htmlColor="#000" />
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                    <AddIcon fontSize="small" htmlColor="#000" />
                  </div>
                )
              }
              className="px-4 sm:px-6 md:px-8 py-4"
            >
              <div className="flex items-center w-full">
                <span className="text-xl sm:text-2xl font-bold text-gray-400 mr-4 sm:mr-6">
                  {item.number}
                </span>
                <span className="text-base sm:text-lg md:text-xl font-semibold text-black">
                  {item.title}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails className="px-4 sm:px-6 md:px-8 pb-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-600">{item.content}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
