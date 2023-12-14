import { useGlobalSearchParams } from "expo-router";
import PdfComponent from "../../components/common/pdfs/pdf";
import { Notes } from "../../constants/Notes";

const Note = () => {
  const params = useGlobalSearchParams();
  return <PdfComponent pdfData={Notes[params.note]} />;
};
export default Note;
