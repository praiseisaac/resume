import { jsPDF } from "jspdf";

const printPdf = () => {
  var doc = new jsPDF();
  var elementHandler = {
    "#ignorePDF": function (element, renderer) {
      return true;
    },
  };
  var source = document.getElementsById("main-container");
  doc.fromHTML(source, 15, 15, {
    width: 180,
    elementHandlers: elementHandler,
  });

  doc.output("dataurlnewwindow");
};
