/**
 * Global Controls — Master Data Model
 * Hyderabad, Telangana, India
 */

export const COMPANY = {
  name: "Global Controls",
  tagline: "Industrial instrumentation distributor & Industrial Manufacturing",
  established: 2004,
  yearsInOperation: "22+",
  proprietor: "Management Team & Works Director",
  gst: "36AAACG1092F1ZK",
  phoneDisplay: "+91 98380 48745",
  phoneRaw: "+919838048745",
  waNumber: "919838048745",
  email: "contact@globalcontrols.in",
  address: "Hyderabad, Telangana",
  addressShort: "Hyderabad, Telangana",
  coordinates: "17.3850\u00b0 N, 78.4867\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "25+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "global-controls-plc-scada-panel",
    "code": "AUT-01",
    "name": "Custom PLC & SCADA Industrial Automation Control Panels",
    "category": "Automation Panels",
    "spec": "Engineered control panels featuring Siemens/Schneider PLCs, integrated touchscreen HMIs, and robust IP65 enclosures.",
    "specsList": [
      {
        "label": "PLC Architecture",
        "val": "Siemens S7-1200 / Schneider Modicon"
      },
      {
        "label": "HMI Display",
        "val": "7-inch to 15-inch Color Capacitive"
      },
      {
        "label": "Ingress Protection",
        "val": "IP55 / IP65 Powder Coated Enclosure"
      },
      {
        "label": "Testing & QA",
        "val": "100% Loop Check & FAT Simulation"
      }
    ],
    "price": "\u20b91,85,000",
    "priceUnit": "/ panel"
  },
  {
    "id": "global-controls-vfd-mcc-panels",
    "code": "AUT-02",
    "name": "Heavy Duty VFD & MCC Motor Control Center Panels",
    "category": "Power Distribution",
    "spec": "Harmonic-filtered Variable Frequency Drive panels for multi-motor industrial conveyors, pumps, and process compressors.",
    "specsList": [
      {
        "label": "Drive Capacity",
        "val": "5.5 kW to 315 kW AC Drives"
      },
      {
        "label": "Busbar Rating",
        "val": "High Conductivity Tinned Copper 1000A"
      },
      {
        "label": "Short Circuit Withstand",
        "val": "50 kA for 1 Second"
      },
      {
        "label": "Protection",
        "val": "Thermal Overload & Phase Asymmetry"
      }
    ],
    "price": "\u20b91,20,000",
    "priceUnit": "/ panel"
  },
  {
    "id": "global-controls-instrumentation-cables",
    "code": "AUT-03",
    "name": "Industrial Sensors, Thermocouples & Signal Transmitters",
    "category": "Process Instrumentation",
    "spec": "High-accuracy RTD/thermocouple temperature sensors, 4-20mA pressure transmitters, and shielded data transmission cables.",
    "specsList": [
      {
        "label": "Sensor Calibration",
        "val": "Class A PT100 / Type K Thermocouple"
      },
      {
        "label": "Temperature Range",
        "val": "-50\u00b0C to +1200\u00b0C"
      },
      {
        "label": "Signal Output",
        "val": "4-20 mA Two-Wire / RS485 Modbus"
      },
      {
        "label": "Certification",
        "val": "NABL Traceable Calibration Certificates"
      }
    ],
    "price": "\u20b94,500",
    "priceUnit": "/ unit"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
