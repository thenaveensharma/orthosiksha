import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button,
  TextInput,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import { Image } from "react-native";
import { useEffect, useState, useMemo } from "react";
import Header from "../../components/common/header/Header";
const questions = [
  {
    id: 1,
    title: "Myofunctional appliance is given at which stage?",
    optionA: "Primary dentition",
    optionB: "mixed dentition",
    optionC: "permanent dentition",
    optionD: "adulthood",
    rightOption: "mixed dentition",
  },
  {
    id: 2,
    title: "Functional appliance in skeletal class II are indicated when",
    optionA: "maxilla is prognathic",
    optionB: "maxilla is prognathic and mandible is retrognathic",
    optionC: "mandible is retrognathic and individual is growing",
    optionD: "when severe crowding is present",
    rightOption: "mandible is retrognathic and individual is growing",
  },

  {
    id: 3,
    title:
      "when the twin block appliances are engaged in full closure the upper and lower bite blocks interlock ",
    optionA: "45°",
    optionB: "60°",
    optionC: "70°",
    optionD: "90°",
    rightOption: "70°",
  },
  {
    id: 4,
    title:
      "which of the following statement is/are are true as far as functional appliance are concerned?",
    optionA: "it enhances the length of the mandible",
    optionB: "it improves the overall volume of the oral cavity",
    optionC: "it alters the position of tongue",
    optionD: "all of the above",
    rightOption: "all of the above",
  },

  {
    id: 5,
    title:
      "which of the following is an appropriate indication for fixed functional appliance?",
    optionA:
      "a young girl with class II malocclusion with early mix dentition and CVMI stage of II",
    optionB:
      "a young boy with class II malocclusion with early mix dentition and CVMI stage of II",
    optionC:
      "a  girl whose pubertal growth spurt started in full permanent dentition with class II molar relation and CVMI stage of IV",
    optionD:
      "a girl in whom menstrual cycle has not started having class II malocclusion in mixed dentition and CVMI stage of III",
    rightOption:
      "a  girl whose pubertal growth spurt started in full permanent dentition with class II molar relation and CVMI stage of IV",
  },
  {
    id: 6,
    title: "Reverse headgear is used for",
    optionA: "maxillary skeletal protrusion",
    optionB: "mandibular skeletal protrusion",
    optionC: "maxillary skeletal retrusion",
    optionD: "bimaxillary protrusion",
    rightOption: "maxillary skeletal retrusion",
  },

  {
    id: 7,
    title: "Distalization of molars is accomplished by?",
    optionA: "cervical headgear",
    optionB: "chin cup",
    optionC: "facemask",
    optionD: "all of the above",
    rightOption: "cervical headgear",
  },
  {
    id: 8,
    title: "Growing patient with retrusive maxilla can be best treated by",
    optionA: "headgear",
    optionB: "chin cup",
    optionC: "facemask",
    optionD: "FR II appliance",
    rightOption: "facemask",
  },
  {
    id: 9,
    title: "Which of the following constitutes extraoral anchorage device?",
    optionA: "intermaxillary elastics",
    optionB: "facemask",
    optionC: "lip bumper",
    optionD: "reciprocal anchorage",
    rightOption: "facemask",
  },
  {
    id: 10,
    title:
      "Tandem traction face bow appliance is used for correction of which type of malocclusion?",
    optionA: "class I",
    optionB: "class II",
    optionC: "class II/2",
    optionD: "class III",
    rightOption: "class III",
  },

  {
    id: 11,
    title:
      "To regain arch length in the anterior segment by moving the incisors labially, one should ",
    optionA: "use a tongue blade",
    optionB: "use an inclined plane",
    optionC: "use a split saddle acrylic space regainer",
    optionD:
      "evaluate the position of the teeth cephalometrically before beginning",
    rightOption:
      "evaluate the position of the teeth cephalometrically before beginning",
  },
  {
    id: 12,
    title:
      "During eruption of lower lateral incisors, left primary canine is prematurely exfoliated. The line of treatment for this situation is",
    optionA: "no treatment, but periodic evaluation",
    optionB: "move the left permanent lateral incisor towards midline",
    optionC: "move the right permanent lateral incisor towards midline",
    optionD: "extraction of right primary canine to prevent midline shift",
    rightOption: "extraction of right primary canine to prevent midline shift",
  },

  {
    id: 13,
    title: "The best method for arch length preservation is",
    optionA: "placing a lingual arch ",
    optionB: "restoring a carious tooth",
    optionC: "placing a band and loop space maintainer",
    optionD: "placing an acrylic removable space maintainer",
    rightOption: "restoring a carious tooth",
  },
  {
    id: 14,
    title:
      "Disking of oversized first or second deciduous molars to allow eruption of contiguous permanent teeth is ",
    optionA: "preventive orthodontics",
    optionB: "interceptive orthodontics",
    optionC: "corrective orthodontics",
    optionD: "should not be done",
    rightOption: "preventive orthodontics",
  },
  {
    id: 15,
    title: "Space regaining is indicated in all of the following except",
    optionA: "one or more permanent teeth has been lost",
    optionB:
      "some space in the arch has been lost due to mesial drift of 1st permanent molar",
    optionC:
      "mixed dentition analysis shows that, once the lost space is gained back, there will not be any arch length-tooth material discrepancy",
    optionD:
      "1st molars are in end to end relation due to class II skeletal base and retrognathic mandible",
    rightOption:
      "1st molars are in end to end relation due to class II skeletal base and retrognathic mandible",
  },
  {
    id: 16,
    title:
      "a ten year old patient has lower canine trying to erupt into a space insufficient by 2 mm. Primary second molars are larger and firmly in space. First premolars are erupting. An acceptable preventive orthodontics procedure in this case is",
    optionA: "extraction of primary second molar",
    optionB: "extraction of premolars",
    optionC: "disking of primary second molar",
    optionD: "an active space regainer",
    rightOption: "disking of primary second molar",
  },

  {
    id: 17,
    title:
      "A differential diagnosis in child resorting to lip biting habit without primary involvement of mentalis muscle is",
    optionA: "learned habit",
    optionB: "patient is suffering from cracked lips due to xerostomia",
    optionC: "class II division I malocclusion",
    optionD: "lack of parental care",
    rightOption: "class II division I malocclusion",
  },
  {
    id: 18,
    title: "Nuck sugar nipples have been designed to prevent the problems of",
    optionA: "mouth breathing",
    optionB: "thumb sucking",
    optionC: "bruxism",
    optionD: "maxillary proclination",
    rightOption: "thumb sucking",
  },

  {
    id: 19,
    title:
      "Model Diagnostic setup for planning clear a liners in 1945 was given by",
    optionA: "rickets",
    optionB: "tweed",
    optionC: "angle",
    optionD: "kesling",
    rightOption: "kesling",
  },
  {
    id: 20,
    title:
      "When force is applied through centre of resistance of tooth which of the following occurs",
    optionA: "rotation",
    optionB: "translation",
    optionC: "tipping",
    optionD: "torquing",
    rightOption: "translation",
  },
  {
    id: 21,
    title: "Best time to modify growth is",
    optionA: "early mixed dentition",
    optionB: "late mixed dentition",
    optionC: "primary dentition",
    optionD: "permanent dentition",
    rightOption: "late mixed dentition",
  },
  {
    id: 22,
    title:
      "Diagnostic AIDS used for measuring transverse discrepancy and vertical face dimension",
    optionA: "PA ceph",
    optionB: "lateral ceph",
    optionC: "OPG",
    optionD: "Occipitomental",
    rightOption: "PA ceph",
  },
  {
    id: 23,
    title:
      "According to which theory thumb sucking habit is due to Deep emotional influence",
    optionA: "palemo theory",
    optionB: "freudian theory",
    optionC: "operant conditioning theory",
    optionD: "classic conditioning thoery",
    rightOption: "freudian theory",
  },
  {
    id: 24,
    title:
      "In a tooth with alveolar born resorption what will be the change in centre of resistance",
    optionA: "it will shift apically",
    optionB: "it will shift coronally",
    optionC: "no change",
    optionD: "it will move outside the tooth",
    rightOption: "it will shift apically",
  },
  {
    id: 25,
    title: "Adolescent age group is defined as",
    optionA: "14-20 years",
    optionB: "10-18 years",
    optionC: "10-14 years",
    optionD: "6-10 years",
    rightOption: "14-20 years",
  },
  {
    id: 26,
    title:
      "How much overjet can be successfully managed using dentofacial orthopedics",
    optionA: "0-7 mm",
    optionB: "5-7 mm",
    optionC: "10-14 mm",
    optionD: "14-18 mm",
    rightOption: "10-14 mm",
  },
  {
    id: 27,
    title:
      "A 9 year old child with developing facial asymmetry and maxillary constriction and unilateral posterior cross bite comes to you for treatment what will you do",
    optionA: "send for radiographic analysis",
    optionB: "refer to orthodontics",
    optionC: "start expansion by orthodontic appliance",
    optionD: "wait for eruption of all tooth",
    rightOption: "refer to orthodontics",
  },
  {
    id: 28,
    title: "The dimension of inner bow of face bow used in orthodontics is",
    optionA: "0.4 mm and 0.6 mm",
    optionB: "0.90 and 1.62 inches",
    optionC: "0.045 and 0.125 inches",
    optionD: "0.045 and 0.051 inches",
    rightOption: "0.045 and 0.051 inches",
  },
  {
    id: 29,
    title:
      "A 5 year and 4 months old child has a retrusive chin with reduced lower facial height. On intraoral examination full cusp distal step molar relation is seen. The cephalometric  parameters reveales a normal SNA but a reduced SNB. What should be the line of treatment ",
    optionA: "frankel II",
    optionB: "Twin block",
    optionC: "review at 6 yrs",
    optionD: "bionator",
    rightOption: "review at 6 yrs",
  },
  {
    id: 30,
    title: "In a mouth breather tonicity of upper lip is",
    optionA: "increased",
    optionB: "decreased",
    optionC: "slightly affected",
    optionD: "no change",
    rightOption: "decreased",
  },
  {
    id: 31,
    title:
      "The importance of proximal caries in deciduous first molar for an orthodontist is",
    optionA: "reduction in arch length due to growth of mandible",
    optionB: "loss of arch length",
    optionC: "class I  malocclusion",
    optionD: "flush terminal plane maloclussion",
    rightOption: "loss of arch length",
  },
  {
    id: 32,
    title: "Adams class is formed from which gauge of stainless steel wire",
    optionA: "23 mil",
    optionB: "22 mil",
    optionC: "24 mil",
    optionD: "28 mil",
    rightOption: "28 mil",
  },
  {
    id: 33,
    title: "Maximum lip thickness is seen at what age in males",
    optionA: "10 years",
    optionB: "16 years",
    optionC: "18 years",
    optionD: "21 years",
    rightOption: "16 years",
  },
  {
    id: 34,
    title: "Skeletal classification of Malocclusion was first given by",
    optionA: "salzman",
    optionB: "angle",
    optionC: "kratz",
    optionD: "moyers",
    rightOption: "salzman",
  },
  {
    id: 35,
    title: "For a bodily movement of a small tooth force required is",
    optionA: "25-30 g",
    optionB: "40-75 g",
    optionC: "120-150 g",
    optionD: "more than 150 g",
    rightOption: "40-75 g",
  },
  {
    id: 36,
    title: "Heavy forces on periodontal ligament cause",
    optionA: "hyalinization",
    optionB: "osteoclastic activity on tooth",
    optionC: "osteoblastic activity on tooth",
    optionD: "ankylosis",
    rightOption: "hyalinization",
  },
  {
    id: 37,
    title:
      "A single force is applied to the crowns of upper incisors tipping is around the point of rotation present at",
    optionA: "infinity",
    optionB: "apical 1/3rd",
    optionC: "middle 1/3rd",
    optionD: "coronal 1/3rd",
    rightOption: "apical 1/3rd",
  },
  {
    id: 38,
    title: "First tissue to react when orthodontic forces are applied is",
    optionA: "PDL",
    optionB: "cementum",
    optionC: "dentine",
    optionD: "alveolar bone",
    rightOption: "PDL",
  },
  {
    id: 39,
    title: "Most easiest movement during orthodontic treatment is",
    optionA: "intrusion",
    optionB: "tipping",
    optionC: "extrusion",
    optionD: "bodily movement",
    rightOption: "extrusion",
  },
  {
    id: 40,
    title:
      "Dominant movement of tooth with relatively less movement of crown is called",
    optionA: "couple",
    optionB: "torque",
    optionC: "intrusion",
    optionD: "extrusion",
    rightOption: "torque",
  },
  {
    id: 41,
    title: "In translation centre of rotation is at",
    optionA: "apical 1/3rd",
    optionB: "coronal 1/3rd",
    optionC: "infinity",
    optionD: "apex",
    rightOption: "infinity",
  },
  {
    id: 42,
    title: "When anchor unit is allowed to tip it is called __ Anchcorage",
    optionA: "simple",
    optionB: "compound",
    optionC: "complex",
    optionD: "reciprocal",
    rightOption: "simple",
  },
  {
    id: 43,
    title:
      "Extrusive moments idly would produce no areas of compression within pdl but will produce",
    optionA: "only contusion",
    optionB: "only tension",
    optionC: "only retraction",
    optionD: "only extraction",
    rightOption: "only tension",
  },
  {
    id: 44,
    title:
      "The space maintainer which is contraindicated in a child suffering from some acute bacterial endocarditis is",
    optionA: "removable",
    optionB: "crown and loop",
    optionC: "band and loop",
    optionD: "distal shoe",
    rightOption: "distal shoe",
  },
  {
    id: 45,
    title:
      "A mandibular lingual holding arch with loops mesial to each molar band is used in children for",
    optionA: "correction",
    optionB: "regaining space",
    optionC: "space maintenance only",
    optionD: "correction of distally tilted molars",
    rightOption: "regaining space",
  },
  {
    id: 46,
    title: "Serial extraction was introduced by",
    optionA: "Hawley adam",
    optionB: "Frankel",
    optionC: "Kjellgren",
    optionD: "Nance",
    rightOption: "Kjellgren",
  },
  {
    id: 47,
    title:
      "In expansion screws and expansion of 90 degree causes an expansion of",
    optionA: "0.20 mm",
    optionB: "0.10 mm",
    optionC: "0.36 mm",
    optionD: "0.09 mm",
    rightOption: "0.20 mm",
  },
  {
    id: 48,
    title: "Which of the following is not used for slow maxillary expansion",
    optionA: "jack screw",
    optionB: "coffin spring",
    optionC: "quad helix appliance",
    optionD: "hyrax appliance",
    rightOption: "hyrax appliance",
  },
  {
    id: 49,
    title:
      "Premature exfoliation of primary Mandibular canine is most often the sequelae of which of the following",
    optionA: "caries",
    optionB: "trauma",
    optionC: "serial tooth extraction",
    optionD: "arch length inadequacy",
    rightOption: "arch length inadequacy",
  },
  {
    id: 50,
    title:
      "Crossbites are often seen in developing dentition in molar region the treatment is",
    optionA: "move both molars for correction",
    optionB: "extract one molar",
    optionC: "extract both molars",
    optionD:
      "possibility of functional interference considered and shift of mandible to be taken into account",
    rightOption:
      "possibility of functional interference considered and shift of mandible to be taken into account",
  },
  {
    id: 51,
    title: "Ideally a malocclusion should be treated between the age of",
    optionA: "5 and 8 yrs",
    optionB: "8 and 10 yrs",
    optionC: "10 to 12 yrs",
    optionD:
      "the age at which a malocclusion is treated depends on the problem involved",
    rightOption:
      "the age at which a malocclusion is treated depends on the problem involved",
  },
  {
    id: 52,
    title: "An example of unilateral fixed space maintainer is",
    optionA: "crown and loop space maintainer",
    optionB: "nance palatal arch",
    optionC: "lingual arch space maintainer",
    optionD: "transpalatal arch",
    rightOption: "crown and loop space maintainer",
  },
  {
    id: 53,
    title: "The diameter of labial bow of maxillary plate",
    optionA: "0.5-0.6 mm",
    optionB: "0.6-0.8 mm",
    optionC: "0.7-0.8 mm",
    optionD: "0.8-1.0 mm",
    rightOption: "0.7-0.8 mm",
  },
  {
    id: 54,
    title: "anchorage in removable appliance is provided by",
    optionA: "acrylic base only",
    optionB: "teeth",
    optionC: "acrylic base and teeth",
    optionD: "retentive clasps",
    rightOption: "acrylic base and teeth",
  },
  {
    id: 55,
    title: "Inclined plane is constructed",
    optionA: "90° to the occlusal plane",
    optionB: "45° to the occlusal plane",
    optionC: "30° to the occlusal plane",
    optionD: "70° to the occlusal plane",
    rightOption: "45° to the occlusal plane",
  },
  {
    id: 56,
    title:
      "Which of the following clasp is preferable on a partially erupted tooth for adequate retention of removable orthodontic appliance",
    optionA: "circumferential clasp",
    optionB: "Adams clasp",
    optionC: "Jacksons clasp",
    optionD: "south end clasp",
    rightOption: "Adams clasp",
  },
  {
    id: 57,
    title:
      "Which of the following class is indicated when retention is required for anterior region",
    optionA: "South end clasp",
    optionB: "Triangular clasp",
    optionC: "Adams clasp",
    optionD: "A and c",
    rightOption: "A and c",
  },
  {
    id: 58,
    title: "The first orthodontic appliance devised by angle was",
    optionA: "Edgewise",
    optionB: "Pin and tube appliance",
    optionC: "E-arch",
    optionD: "Ribbon arch",
    rightOption: "E-arch",
  },
  {
    id: 59,
    title: "Differential force concept is mainly used in",
    optionA: "Straight wire appliance",
    optionB: "Lingual appliance",
    optionC: "Beggs's light wire appliance",
    optionD: "Frankel appliance",
    rightOption: "Begg's light wire appliance",
  },
  {
    id: 60,
    title: "Interrupted forces are applied with the help of",
    optionA: "Elastics",
    optionB: "screws",
    optionC: "Springs",
    optionD: "None of the above",
    rightOption: "None of the above",
  },
  {
    id: 61,
    title: "Which of the following wires are also called Shape Memory wires",
    optionA: "Stainless steel round wire",
    optionB: "Multiflex round wire",
    optionC: "nickel titanium wires",
    optionD: "Stainless steel edgewise wire",
    rightOption: "nickel titanium wires",
  },
  {
    id: 62,
    title: "When length of the spring is doubled the effect is",
    optionA: "Doubled",
    optionB: "Four times",
    optionC: "Six times",
    optionD: "Eight times",
    rightOption: "Eight times",
  },
  {
    id: 63,
    title: "Midline diastema can be corrected by all of the following except",
    optionA: "lingual bow with inter tooth traction",
    optionB: "Hawley's appliance with finger spring",
    optionC: "bonding tooth and inter tooth elastics",
    optionD: "use of steel ligature directly on tooth",
    rightOption: "use of steel ligature directly on tooth",
  },
  {
    id: 64,
    title: "Best retainer advise after the closure of midline diastema",
    optionA: "Hawley's retainer",
    optionB: "Hawley's retainer with finger spring",
    optionC: "positioner",
    optionD: "bonded retainer",
    rightOption: "bonded retainer",
  },
  {
    id: 65,
    title:
      "In order to avoid injuries to tissues forces applied generally should not exceed",
    optionA: "capillary blood pressure",
    optionB: "diastolic arterial blood pressure",
    optionC: "masticatory forces",
    optionD: "systolic arterial blood pressure",
    rightOption: "capillary blood pressure",
  },
  {
    id: 66,
    title: "Shape of interdental papilla in midline diastema cases is",
    optionA: "pyramidal",
    optionB: "round",
    optionC: "triangular",
    optionD: "no specific shape",
    rightOption: "no specific shape",
  },
  {
    id: 67,
    title: "Bruxism should be treated by night guard using",
    optionA: "Hawley's retainer",
    optionB: "occlusal splint",
    optionC: "double occlusal splint",
    optionD: "all of the above",
    rightOption: "occlusal splint",
  },
  {
    id: 68,
    title:
      "And 8 year old child has end on end molar occlusion. Clinician should",
    optionA: "observe and wait for the other permanent teeth to erupt",
    optionB: "do the distal disking of 2nd primary molar",
    optionC: "extract the 1st primary molar",
    optionD: "serial extraction",
    rightOption: "observe and wait for the other permanent teeth to erupt",
  },
  {
    id: 69,
    title: "Retention appliance should be",
    optionA: "retentive only",
    optionB: "passive only",
    optionC: "passive + retentive",
    optionD: "active + retentive",
    rightOption: "passive + retentive",
  },
  {
    id: 70,
    title:
      "Overbites must be reduced during the first stage of class II/I treatment",
    optionA: "prevent traumatic overbite",
    optionB: "disengage buccal cusps",
    optionC: "allow lower space to close",
    optionD: "permit full overjet reduction",
    rightOption: "permit full overjet reduction",
  },
  {
    id: 71,
    title: "Prolonged retention is usually needed in",
    optionA: "diastema",
    optionB: "mild crowding",
    optionC: "anterior cross bite",
    optionD: "deep bite",
    rightOption: "diastema",
  },
  {
    id: 72,
    title:
      "The ratio of upper interior facial height and lower interior facial height in normal occlusion cases is",
    optionA: "60:40",
    optionB: "45:55",
    optionC: "55:45",
    optionD: "40:60",
    rightOption: "45:55",
  },
  {
    id: 73,
    title: "Relapse after orthodontic tooth movement is due to",
    optionA: "supracrestal gingival fibres",
    optionB: "abnormal pressure habits",
    optionC: "improper angulation of the tooth",
    optionD: "all of the above",
    rightOption: "all of the above",
  },
  {
    id: 74,
    title: "Which of the following is the least stable orthodontic correction",
    optionA: "maxillary expansion",
    optionB: "rotations",
    optionC: "overbite",
    optionD: "overjet",
    rightOption: "rotations",
  },
  {
    id: 75,
    title:
      "Minimum incidence of cleft palate is seen in which of the following",
    optionA: "mongoloid",
    optionB: "afghans",
    optionC: "negroes",
    optionD: "south americans",
    rightOption: "negroes",
  },
  {
    id: 76,
    title: "Everted lips are associated with",
    optionA: "increased lower facial height",
    optionB: "decreased anterior facial height",
    optionC: "orthognathic mandible",
    optionD: "prognathic mandible",
    rightOption: "decreased anterior facial height",
  },
  {
    id: 77,
    title: "In case of anterior deep bite what will be seen",
    optionA: "upward roll of mandible",
    optionB: "downward roll of mandible",
    optionC: "upward pitch of maxilla",
    optionD: "downward pitch of maxilla",
    rightOption: "downward pitch of maxilla",
  },
  {
    id: 78,
    title: "Xi point is seen in which analysis",
    optionA: "Ricketts analysis",
    optionB: "Sissouni's analysis",
    optionC: "Downs analysis",
    optionD: "Steiners analysis",
    rightOption: "Ricketts analysis",
  },
  {
    id: 79,
    title: "In 2nd order bend the movement seen is",
    optionA: "buccal",
    optionB: "lingual",
    optionC: "buccolingual",
    optionD: "mesiodistal",
    rightOption: "mesiodistal",
  },
  {
    id: 80,
    title: "If length is doubled then flexibility will be increased by",
    optionA: "4 times",
    optionB: "8 times",
    optionC: "2 times",
    optionD: "6 times",
    rightOption: "8 times",
  },
  {
    id: 81,
    title: "Chin cap is used in",
    optionA: "Class II div I",
    optionB: "Anterior cross bite",
    optionC: "skeletal class III",
    optionD: "deep bite",
    rightOption: "skeletal class III",
  },
  {
    id: 82,
    title: "Adenoid faces is a feature of",
    optionA: "class 2 div 1",
    optionB: "class 2 div 2",
    optionC: "class 3",
    optionD: "class 1",
    rightOption: "class 2 div 1",
  },
  {
    id: 83,
    title: "At age 5 to 15 maxillary canine travels around",
    optionA: "17 mm",
    optionB: "20 mm",
    optionC: "22 mm",
    optionD: "26 mm",
    rightOption: "22 mm",
  },
  {
    id: 84,
    title: "Muscles involved in buccinator mechanism",
    optionA: "3",
    optionB: "10",
    optionC: "16",
    optionD: "17",
    rightOption: "3",
  },
  {
    id: 85,
    title: "Circumferential fibrotomy is done in",
    optionA: "rotation",
    optionB: "tipping",
    optionC: "uprighting",
    optionD: "translation",
    rightOption: "rotation",
  },
  {
    id: 86,
    title: "Transposition of teeth refers to",
    optionA: "bucco rotation of 120 degrees",
    optionB: "hypodontia",
    optionC:
      "teeth erupted in unusual position ie., one tooth erupts in place of another",
    optionD: "inverted supernumerary tooth",
    rightOption:
      "teeth erupted in unusual position ie., one tooth erupts in place of another",
  },
  {
    id: 87,
    title: "Doliocephalic facial pattern is associated with",
    optionA: "broad dental arch",
    optionB: "long and narrow dental arch ",
    optionC: "paraboloid dental arch",
    optionD: "square dental arch",
    rightOption: "long and narrow dental arch",
  },
  {
    id: 88,
    title: "Normal nasolabial angle",
    optionA: "80°",
    optionB: "110°",
    optionC: "70°",
    optionD: "140°",
    rightOption: "110°",
  },
  {
    id: 89,
    title:
      "Which of the following test are employed to diagnose the mode of respiration",
    optionA: "mirror test",
    optionB: "cotton test",
    optionC: "water test",
    optionD: "all of the above",
    rightOption: "all of the above",
  },
  {
    id: 90,
    title: "Xeroradiography was invented by",
    optionA: "Chester F carlson in 1937",
    optionB: "Simon",
    optionC: "Hudson Kampula and Dickson in 1957",
    optionD: "Hofrath and broad bent 1934",
    rightOption: "Chester F carlson in 1937",
  },

  {
    id: 91,
    title:
      "The number of sides examined to access the stages of bone maturation in  fishman's skeletal maturation index are",
    optionA: "4",
    optionB: "5",
    optionC: "6",
    optionD: "7",
    rightOption: "6",
  },
  {
    id: 92,
    title: "Which of the following is not a type of mouth breathing",
    optionA: "obstructing",
    optionB: "anatomical",
    optionC: "physiological",
    optionD: "habitual",
    rightOption: "physiological",
  },
  {
    id: 93,
    title: "Study model are used",
    optionA: "as references in orthodontic cases",
    optionB: "to show shape, size and position of tooth",
    optionC: "as an aid in treatment planning",
    optionD: "all of the above",
    rightOption: "all of the above",
  },
  {
    id: 94,
    title: "Fibrotomy to prevent Rotational relapse was advocated first by",
    optionA: "Edwards",
    optionB: "Peck and Peck",
    optionC: "Ashley Howes",
    optionD: "Carey",
    rightOption: "Edwards",
  },
  {
    id: 95,
    title: "Heat hardening is done in which orthodontic wire",
    optionA: "Elgiloy",
    optionB: "Stainless steel",
    optionC: "TMA",
    optionD: "NiTi",
    rightOption: "Elgiloy",
  },
  {
    id: 96,
    title:
      "Minimum time period before attempting orthodontic treatment in tooth with tor fracture",
    optionA: "3 months",
    optionB: "6 months",
    optionC: "9 months",
    optionD: "12 months",
    rightOption: "3 months",
  },
  {
    id: 97,
    title:
      "Permanent loss of root structure related to orthodontic treatment occurs primarily at the",
    optionA: "Coronal third",
    optionB: "Middle third",
    optionC: "At apex",
    optionD: "All of the above",
    rightOption: "At apex",
  },
  {
    id: 98,
    title: "Which of the following is not used as antiflux",
    optionA: "Graphite",
    optionB: "Boric acid",
    optionC: "Iron oxide",
    optionD: "Calcium carbonate with alcohol",
    rightOption: "Boric acid",
  },
  {
    id: 99,
    title:
      "The laser used on a crown for debonding orthodontic bracket is known as",
    optionA: " Thermal softening",
    optionB: "Thermal ablation",
    optionC: "Photo ablation",
    optionD: "Laser debonding",
    rightOption: "Laser debonding",
  },
  {
    id: 100,
    title:
      "Molar-incisor hypoplasia in primary teeth at the occlusal level is due to developmental defect occurring during?",
    optionA: "Birth to 12 months",
    optionB: "4th month intra-uterine to birth",
    optionC: "22 months to 26 months",
    optionD: "24 months to 48t months",
    rightOption: "4th month intra-uterine to birth",
  },
];
const Questions_bank = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [totalPage, setTotalPage] = useState(questions?.length / 10);

  function handlePress(question) {
    router.push({ pathname: "/questions_bank/MCQ", params: question });
  }

  const visibleQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    let newQuestions = questions;

    // Apply search filter
    if (searchValue.trim() !== "") {
      newQuestions = newQuestions.filter((question) =>
        question.title.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    }

    // Apply pagination
    setTotalPage(
      parseInt(newQuestions.length / 10) == 0
        ? 1
        : parseInt(newQuestions.length / 10)
    );
    newQuestions = newQuestions.slice(startIndex, endIndex);
    return newQuestions;
  }, [searchValue, currentPage]);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (text) => {
    setSearchValue(text);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Header headerTitle={"Question Bank"} />
      <View
        style={{
          backgroundColor: "#FFF",
          borderBottomColor: "#000000",
          borderWidth: 1,
          borderRadius: 10,
          marginHorizontal: 5,
          marginVertical: 7,
        }}
      >
        <TextInput
          onChangeText={(text) => handleSearchChange(text)}
          value={searchValue}
          placeholder="Search all questions"
          style={{ padding: 10 }}
        />
      </View>
      {visibleQuestions?.length ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {visibleQuestions.map((question, index) => (
              <View
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 30,
                }}
                key={index}
              >
                <TouchableOpacity
                  style={{
                    width: "100%",
                    backgroundColor: COLORS.lightWhite,
                  }}
                  onPress={() => handlePress(question)}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: 25,
                      margin: 5,
                      flex: 1,
                      flexDirection: "row",
                      alignquestions: "center",
                      justifyContent: "flex-start",
                      borderWidth: 1,
                    }}
                  >
                    <Image
                      source={images.Play}
                      style={{ width: 50, height: 50, margin: 5 }}
                    ></Image>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        textAlign: "left",
                        margin: 5,
                        padding: 5,
                        width: "100%",
                        flexWrap: "wrap",
                        flexShrink: 1,
                        flexGrow: 1,
                      }}
                    >
                      {question?.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              backgroundColor: "#FFF",
              borderBottomColor: "#000000",
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 7,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <TouchableOpacity
                onPress={handlePrevPage}
                disabled={currentPage <= 1}
              >
                <Text
                  style={{
                    color: currentPage <= 1 ? "gray" : undefined,
                  }}
                >
                  {"< Prev"}
                </Text>
              </TouchableOpacity>
              <Text>{`Page ${currentPage}/${totalPage}`}</Text>
              <TouchableOpacity
                onPress={handleNextPage}
                disabled={currentPage === totalPage}
              >
                <Text
                  style={{
                    color: currentPage === totalPage ? "gray" : undefined,
                  }}
                >
                  {"Next >"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No data available for</Text>
          <Text
            style={{
              color: "orange",
            }}
          >
            "{`${searchValue}`}"
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Questions_bank;
