import { useGlobalSearchParams } from "expo-router";
import PdfComponent from "../../components/common/pdfs/pdf";
import { Cases } from "../../constants/Cases";

const Case = () => {
  const params = useGlobalSearchParams();
  return <PdfComponent pdfData={Cases[params.case]} />;
};
export default Case;
