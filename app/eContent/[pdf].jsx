import { useGlobalSearchParams } from "expo-router";
import PdfComponent from "../../components/common/pdfs/pdf";
import { eContents } from "../../constants/eContents";

const EContent = () => {
  const params = useGlobalSearchParams();
  return <PdfComponent pdfData={eContents[params.pdf]} />;
};
export default EContent;
