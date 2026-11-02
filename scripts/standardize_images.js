const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const copyList = [
  // 1. Branding
  ['clinic_logo.png', 'branding/logo.png'],
  ['branding/logo_emblem.png', 'branding/emblem.png'],
  ['branding/logo_badge.png', 'branding/badge.png'],

  // 2. Hero
  ['hero/Dentists_cleaning_giant_tooth_2K.jpg', 'hero/hero_main.jpg'],
  ['hero/hero_patient_stat.png', 'hero/hero_stat_badge.png'],

  // 3. Doctors
  ['doctors/dr_sumi_tiwari.png', 'doctors/doctor_1.png'],
  ['doctors/dr_rahul_tiwari.png', 'doctors/doctor_2.png'],

  // 4. Clinic
  ['clinic/tour/doctor_consultation_desk.jpg', 'clinic/clinic_desk.jpg'],
  ['clinic/tour/primary_dental_operatory.jpg', 'clinic/clinic_operatory.jpg'],
  ['clinic/tour/patient_waiting_lounge.jpg', 'clinic/clinic_waiting.jpg'],
  ['clinic/tour/sterilization_hygiene_station.jpg', 'clinic/clinic_sterilization.jpg'],
  ['clinic/tour/sterilized_delivery_unit.jpg', 'clinic/clinic_delivery_unit.jpg'],
  ['clinic/sai_clinic_photo_02.jpg', 'clinic/clinic_chairside_tech.jpg'],

  // 5. Technology
  ['technology/tech_vatech_rvg.jpg', 'technology/tech_rvg.jpg'],
  ['technology/tech_endoradar.jpg', 'technology/tech_apex_locator.jpg'],
  ['technology/mobile/tech_vatech_rvg.jpg', 'technology/mobile/tech_rvg.jpg'],
  ['technology/mobile/tech_endoradar.jpg', 'technology/mobile/tech_apex_locator.jpg'],

  // 6. Cases
  ['cases/case_stage1_preop.jpg', 'cases/case_01_step_1.jpg'],
  ['cases/case_before.png', 'cases/case_01_step_2.png'],
  ['cases/case_after.png', 'cases/case_01_step_3.png'],

  ['cases/case_veneer_1.jpg', 'cases/case_02_step_1.jpg'],
  ['cases/case_veneer_2.jpg', 'cases/case_02_step_2.jpg'],
  ['cases/case_veneer_3.jpg', 'cases/case_02_step_3.jpg'],

  ['cases/case_composite_1_before_v2.jpg', 'cases/case_03_step_1.jpg'],
  ['cases/case_composite_2_bonding_v2.jpg', 'cases/case_03_step_2.jpg'],
  ['cases/case_composite_3_after_v2.jpg', 'cases/case_03_step_3.jpg'],

  ['cases/case_rct_1_before_v2.jpg', 'cases/case_04_step_1.jpg'],
  ['cases/case_rct_2_prep_v2.jpg', 'cases/case_04_step_2.jpg'],
  ['cases/case_rct_3_after_v2.jpg', 'cases/case_04_step_3.jpg'],
];

let copied = 0;
for (const [srcRel, destRel] of copyList) {
  const src = path.join(publicDir, srcRel);
  const dest = path.join(publicDir, destRel);

  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    copied++;
    console.log(`✓ Copied: ${srcRel} -> ${destRel}`);
  } else {
    console.warn(`! Source not found: ${srcRel}`);
  }
}

console.log(`\nSuccessfully standardized ${copied} files!`);
