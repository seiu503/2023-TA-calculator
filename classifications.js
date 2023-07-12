const classifications = [
  {
    "Position": "Accountant 1",
    "Classification_Code": 1316,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Accountant 2",
    "Classification_Code": 1317,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Accountant 3",
    "Classification_Code": 1318,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Accounting Technician",
    "Classification_Code": 313,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Accounting Technician",
    "Classification_Code": 313,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Activities Coordinator",
    "Classification_Code": 6530,
    "Compensation Grade": 19,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Administrative Law Judge 1",
    "Classification_Code": 1510,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Administrative Law Judge 2",
    "Classification_Code": 1511,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Administrative Law Judge 3",
    "Classification_Code": 1513,
    "Compensation Grade": 37,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Administrative Specialist 1",
    "Classification_Code": 107,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Administrative Specialist 2",
    "Classification_Code": 108,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Adult Protective Service Specialist",
    "Classification_Code": 6616,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Adult Protective Service Specialist",
    "Classification_Code": 6616,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Aerial Photographer",
    "Classification_Code": 3540,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Aircraft Pilot",
    "Classification_Code": 8333,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Appraiser Analyst 1",
    "Classification_Code": 735,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Appraiser Analyst 2",
    "Classification_Code": 736,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Appraiser Analyst 3",
    "Classification_Code": 737,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Appraiser Analyst 4",
    "Classification_Code": 738,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Apprenticeship Representative",
    "Classification_Code": 4380,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Automotive Fleet Attendant",
    "Classification_Code": 4417,
    "Compensation Grade": 14,
    "Steps_Removed": 2,
    "Current lowest step": 2,
    "New lowest step": 4
  },
  {
    "Position": "Automotive Technician 1",
    "Classification_Code": 4418,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Automotive Technician 2",
    "Classification_Code": 4419,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Behavioral Health Specialist 1",
    "Classification_Code": 6531,
    "Compensation Grade": 24,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Behavioral Health Specialist 2",
    "Classification_Code": 6534,
    "Compensation Grade": 27,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Behavioral Health Specialist 3",
    "Classification_Code": 6535,
    "Compensation Grade": 29,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Biological Science Assistant",
    "Classification_Code": 3769,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Business & Employment Specialist 2",
    "Classification_Code": 6699,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Carpenter",
    "Classification_Code": 4003,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Certified Occupation Therapist Assistant",
    "Classification_Code": 6506,
    "Compensation Grade": 20,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Chaplain",
    "Classification_Code": 6680,
    "Compensation Grade": 24,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Chemist 1",
    "Classification_Code": 3715,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Chemist 2",
    "Classification_Code": 3716,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Chemist 3",
    "Classification_Code": 3717,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Child Nutrition Specialist",
    "Classification_Code": 5950,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Child Support Case Manager",
    "Classification_Code": 5139,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Child Support Case Manager Entry",
    "Classification_Code": 5138,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Child Support Specialist",
    "Classification_Code": 5133,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Civil Engineering Specialist 1",
    "Classification_Code": 3136,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Civil Rights Investigator 1",
    "Classification_Code": 5340,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Civil Rights Investigator 2",
    "Classification_Code": 5341,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Claims Representative 1",
    "Classification_Code": 5307,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Claims Representative 2",
    "Classification_Code": 5308,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Client Care Surveyor",
    "Classification_Code": 6685,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Clinical Laboratory Scientist",
    "Classification_Code": 6833,
    "Compensation Grade": 24,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Clinical Psychologist 1",
    "Classification_Code": 6394,
    "Compensation Grade": 33,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Clinical Psychologist 2",
    "Classification_Code": 6395,
    "Compensation Grade": 35,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Communicable Disease Analyst",
    "Classification_Code": 5903,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Community Outreach Specialist",
    "Classification_Code": 6614,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Compliance Specialist 1",
    "Classification_Code": 5346,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Compliance Specialist 1",
    "Classification_Code": 5346,
    "Compensation Grade": 21,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Compliance Specialist 2",
    "Classification_Code": 5347,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Compliance Specialist 2",
    "Classification_Code": 5347,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Compliance Specialist 3",
    "Classification_Code": 5348,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Construction Inspector",
    "Classification_Code": 3365,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Construction Project Manager 1",
    "Classification_Code": 3367,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Construction Project Manager 2",
    "Classification_Code": 3368,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Construction Project Manager 3",
    "Classification_Code": 3369,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Cook",
    "Classification_Code": 9117,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Custodial Services Coordinator",
    "Classification_Code": 4103,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Custodian",
    "Classification_Code": 4101,
    "Compensation Grade": 10,
    "Steps_Removed": 2,
    "Current lowest step": 6,
    "New lowest step": 8
  },
  {
    "Position": "Data Entry Control Technician",
    "Classification_Code": 1475,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Data Entry Operator",
    "Classification_Code": 501,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Dental Assistant 2",
    "Classification_Code": 6394,
    "Compensation Grade": 20,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Dental Hygienist",
    "Classification_Code": 6396,
    "Compensation Grade": 29,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Dietitian 2",
    "Classification_Code": 6371,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Disability Analyst 1",
    "Classification_Code": 5936,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Disability Analyst 2",
    "Classification_Code": 5937,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Disability Analyst 2",
    "Classification_Code": 5937,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "District Veterinarian",
    "Classification_Code": 6440,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "DOJ Claims Examiner",
    "Classification_Code": 5933,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Dormitory Counselor 1",
    "Classification_Code": 6767,
    "Compensation Grade": 16,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Dormitory Counselor 2",
    "Classification_Code": 6768,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Economist 1",
    "Classification_Code": 1161,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Economist 2",
    "Classification_Code": 1163,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Economist 3",
    "Classification_Code": 1163,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Economist 4",
    "Classification_Code": 1164,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Education Program Specialist 1",
    "Classification_Code": 3300,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Education Program Specialist 2",
    "Classification_Code": 3301,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Electrician 2",
    "Classification_Code": 4008,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Electrician 3",
    "Classification_Code": 4009,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Electronic Publishing Design Specialist 1",
    "Classification_Code": 3510,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Electronic Publishing Design Specialist 2",
    "Classification_Code": 3511,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Electronic Publishing Design Specialist 3",
    "Classification_Code": 3513,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Electronic Security Technician 2",
    "Classification_Code": 4051,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Employment Adjudicator",
    "Classification_Code": 6693,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Employment Appeals Board Legal Staff",
    "Classification_Code": 1543,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Engineering Technician 2",
    "Classification_Code": 3110,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Engineering Technician 3",
    "Classification_Code": 3111,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Environmental Engineer 2",
    "Classification_Code": 3411,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Environmental Engineer 3",
    "Classification_Code": 3413,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Environmental Health Specialist 3",
    "Classification_Code": 3819,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Epidemiologist 1",
    "Classification_Code": 6316,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Epidemiologist 2",
    "Classification_Code": 6317,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Epidemiologist 3",
    "Classification_Code": 6318,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Equipment Operator",
    "Classification_Code": 4433,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Executive Assistant",
    "Classification_Code": 830,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Executive Support Specialist 1",
    "Classification_Code": 118,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Executive Support Specialist 2",
    "Classification_Code": 119,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Facilities Engineer 1",
    "Classification_Code": 3351,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facilities Engineer 3",
    "Classification_Code": 3353,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facility Energy Technician 2",
    "Classification_Code": 4033,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facility Energy Technician 3",
    "Classification_Code": 4034,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facility Energy Technician 4",
    "Classification_Code": 4035,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facility Maintenance Specialist",
    "Classification_Code": 4013,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Facility Operations Specialist 1",
    "Classification_Code": 4014,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Facility Operations Specialist 2",
    "Classification_Code": 4015,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Financial Enforcement Officer",
    "Classification_Code": 1547,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Financial Examiner 1",
    "Classification_Code": 5675,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Financial Examiner 2",
    "Classification_Code": 5676,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Financial Examiner 3",
    "Classification_Code": 5677,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Financial Investigator 1",
    "Classification_Code": 5335,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Fiscal Analyst 1",
    "Classification_Code": 1343,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Fiscal Analyst 2",
    "Classification_Code": 1344,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Fiscal Analyst 3",
    "Classification_Code": 1345,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Fiscal Auditor 1",
    "Classification_Code": 5641,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Fish and Wildlife Technical Coordinator",
    "Classification_Code": 8346,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Fish and Wildlife Technician",
    "Classification_Code": 8341,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Fish and Wildlife Technician",
    "Classification_Code": 8341,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Fish and Wildlife Technician Entry",
    "Classification_Code": 8340,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Fish and Wildlife Technician Senior",
    "Classification_Code": 8343,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Food Service Worker",
    "Classification_Code": 9103,
    "Compensation Grade": 13,
    "Steps_Removed": 4,
    "Current lowest step": 3,
    "New lowest step": 7
  },
  {
    "Position": "Food Service Worker",
    "Classification_Code": 9103,
    "Compensation Grade": 13,
    "Steps_Removed": 4,
    "Current lowest step": 3,
    "New lowest step": 7
  },
  {
    "Position": "Forest Crew Coordinator",
    "Classification_Code": 8318,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Forest Lookout",
    "Classification_Code": 8353,
    "Compensation Grade": 11,
    "Steps_Removed": 2,
    "Current lowest step": 5,
    "New lowest step": 7
  },
  {
    "Position": "Forest Management Technician",
    "Classification_Code": 8311,
    "Compensation Grade": 16,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Forest Officer",
    "Classification_Code": 8357,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Geologist 2",
    "Classification_Code": 3531,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Governmental Auditor 1",
    "Classification_Code": 5646,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Governmental Auditor 2",
    "Classification_Code": 5647,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Governmental Auditor 3",
    "Classification_Code": 5648,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Grounds Maintenance Worker 1",
    "Classification_Code": 4109,
    "Compensation Grade": 14,
    "Steps_Removed": 2,
    "Current lowest step": 2,
    "New lowest step": 4
  },
  {
    "Position": "Grounds Maintenance Worker 2",
    "Classification_Code": 4110,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Grounds Maintenance Worker 2",
    "Classification_Code": 4110,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Group Life Coordinator 1",
    "Classification_Code": 6750,
    "Compensation Grade": 15,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Group Life Coordinator 2",
    "Classification_Code": 6751,
    "Compensation Grade": 19,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Hairdresser",
    "Classification_Code": 9300,
    "Compensation Grade": "14B",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Health Care Investigator/Advisor",
    "Classification_Code": 5911,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Health Information Specialist",
    "Classification_Code": 15,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Heavy Equipment Technician 1",
    "Classification_Code": 4437,
    "Compensation Grade": "23T",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Heavy Equipment Technician 2",
    "Classification_Code": 4438,
    "Compensation Grade": "26B",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Human Services Assistant 2",
    "Classification_Code": 6606,
    "Compensation Grade": 16,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Human Services Case Manager",
    "Classification_Code": 6630,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Human Services Specialist 1",
    "Classification_Code": 6657,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Human Services Specialist 2",
    "Classification_Code": 6658,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Human Services Specialist 3",
    "Classification_Code": 6659,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Human Services Specialist 4",
    "Classification_Code": 6660,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Incident Response Operations Specialist",
    "Classification_Code": 4165,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Industrial Hygienist 2",
    "Classification_Code": 5706,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Industrial Hygienist 3",
    "Classification_Code": 5707,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Industrial Hygienist 4",
    "Classification_Code": 5708,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 2",
    "Classification_Code": 1483,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Information Systems Specialist 3",
    "Classification_Code": 1483,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 4",
    "Classification_Code": 1484,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 5",
    "Classification_Code": 1485,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 5",
    "Classification_Code": 1485,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 6",
    "Classification_Code": 1486,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 6",
    "Classification_Code": 1486,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 7",
    "Classification_Code": 1487,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 7",
    "Classification_Code": 1487,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Information Systems Specialist 8",
    "Classification_Code": 1488,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Institution Registered Nurse",
    "Classification_Code": 6314,
    "Compensation Grade": "28N",
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Institution Teacher MA",
    "Classification_Code": 3330,
    "Compensation Grade": "26S",
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Insurance Examiner",
    "Classification_Code": 5748,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Insurance Examiner",
    "Classification_Code": 5748,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Insurance Examiner Entry",
    "Classification_Code": 5747,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Investigator 1",
    "Classification_Code": 5331,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Investigator 2",
    "Classification_Code": 5333,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Investigator 3",
    "Classification_Code": 5333,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Investment Analyst 1",
    "Classification_Code": 1333,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Investment Analyst 2",
    "Classification_Code": 1333,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Investment Analyst 3",
    "Classification_Code": 1334,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Juvenile Probation/Social Services Officer/Juvenile Correction Counselor",
    "Classification_Code": 6633,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Laboratory Technician 2",
    "Classification_Code": 6811,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Laborer/Student Worker",
    "Classification_Code": 4116,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Legal Secretary",
    "Classification_Code": 110,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Librarian",
    "Classification_Code": 3330,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Licensed Practical Nurse",
    "Classification_Code": 6135,
    "Compensation Grade": "22S",
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Livestock Brand Inspector",
    "Classification_Code": 5430,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Loan Specialist 1",
    "Classification_Code": 1001,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Loan Specialist 2",
    "Classification_Code": 1003,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Loan Specialist 3",
    "Classification_Code": 1003,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Machinist",
    "Classification_Code": 4018,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Mail Delivery Driver",
    "Classification_Code": 4404,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Mail Equipment Operator 1",
    "Classification_Code": 403,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Mail Equipment Operator 2",
    "Classification_Code": 404,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Mail Services Assistant",
    "Classification_Code": 405,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Manual Arts Instructor",
    "Classification_Code": 3304,
    "Compensation Grade": 17,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Medical Consultant",
    "Classification_Code": 7538,
    "Compensation Grade": 39,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Medical Laboratory Technician 1",
    "Classification_Code": 6830,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Medical Laboratory Technician 2",
    "Classification_Code": 6831,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Medical Review Coordinator",
    "Classification_Code": 6310,
    "Compensation Grade": "28N",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Mental Health Security Technician",
    "Classification_Code": 6708,
    "Compensation Grade": 17,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Mental Health Therapist 1",
    "Classification_Code": 6711,
    "Compensation Grade": 17,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Mental Health Therapist 2",
    "Classification_Code": 6713,
    "Compensation Grade": 19,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Mental Health Therapy Coordinator",
    "Classification_Code": 6718,
    "Compensation Grade": 19,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Mental Health Therapy Technician",
    "Classification_Code": 6710,
    "Compensation Grade": 15,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Mental Health Therapy Technician",
    "Classification_Code": 6710,
    "Compensation Grade": 15,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Microbiologist 1",
    "Classification_Code": 3779,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Microbiologist 2",
    "Classification_Code": 3780,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Microbiologist 3",
    "Classification_Code": 3781,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Motor Carrier Enforcement Officer 1",
    "Classification_Code": 5857,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Motor Carrier Enforcement Officer 2",
    "Classification_Code": 5858,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 1",
    "Classification_Code": 8501,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Natural Resource Specialist 1",
    "Classification_Code": 8501,
    "Compensation Grade": 21,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 2",
    "Classification_Code": 8503,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 2",
    "Classification_Code": 8503,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 3",
    "Classification_Code": 8503,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 3",
    "Classification_Code": 8503,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 4",
    "Classification_Code": 8504,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 4",
    "Classification_Code": 8504,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 5",
    "Classification_Code": 8505,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Natural Resource Specialist 5",
    "Classification_Code": 8505,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Nutrition Consultant",
    "Classification_Code": 5955,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Occupational Safety Specialist 1",
    "Classification_Code": 5709,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Occupational Safety Specialist 2",
    "Classification_Code": 5710,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Occupational Safety Specialist 3",
    "Classification_Code": 5711,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Occupational Therapist",
    "Classification_Code": 6508,
    "Compensation Grade": 32,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Office Assistant 1",
    "Classification_Code": 101,
    "Compensation Grade": 8,
    "Steps_Removed": 2,
    "Current lowest step": 8,
    "New lowest step": 10
  },
  {
    "Position": "Office Assistant 2",
    "Classification_Code": 103,
    "Compensation Grade": 10,
    "Steps_Removed": 2,
    "Current lowest step": 6,
    "New lowest step": 8
  },
  {
    "Position": "Office Coordinator",
    "Classification_Code": 801,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Office Specialist 1",
    "Classification_Code": 103,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Office Specialist 2",
    "Classification_Code": 104,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Operations & Policy Analyst 1",
    "Classification_Code": 870,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Operations & Policy Analyst 2",
    "Classification_Code": 871,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Operations & Policy Analyst 3",
    "Classification_Code": 873,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Operations & Policy Analyst 3",
    "Classification_Code": 873,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Operations & Policy Analyst 4",
    "Classification_Code": 873,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Painter",
    "Classification_Code": 4001,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Paralegal",
    "Classification_Code": 1534,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Park Ranger 1",
    "Classification_Code": 8434,
    "Compensation Grade": "18P",
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Park Ranger 1",
    "Classification_Code": 8434,
    "Compensation Grade": "18P",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Park Ranger 2",
    "Classification_Code": 8435,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Park Ranger 3",
    "Classification_Code": 8436,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Park Ranger Assistant",
    "Classification_Code": 8433,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "Park Specialist",
    "Classification_Code": 8445,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Parking Services Representative",
    "Classification_Code": 5550,
    "Compensation Grade": 14,
    "Steps_Removed": 2,
    "Current lowest step": 2,
    "New lowest step": 4
  },
  {
    "Position": "Parts Specialist 2",
    "Classification_Code": 783,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Payroll Analyst",
    "Classification_Code": 314,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Pharmacist",
    "Classification_Code": 6360,
    "Compensation Grade": 39,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Pharmacist 2",
    "Classification_Code": 6363,
    "Compensation Grade": 41,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Pharmacist Resident",
    "Classification_Code": 6361,
    "Compensation Grade": 23,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Pharmacy Clerk & Technician 2",
    "Classification_Code": 6388,
    "Compensation Grade": 16,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Pharmacy Clerk & Technician 3",
    "Classification_Code": 6389,
    "Compensation Grade": 17,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Physical Therapist",
    "Classification_Code": 6503,
    "Compensation Grade": 31,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Physical/Electronic Security Technician",
    "Classification_Code": 4037,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Physical/Electronic Security Technician 3",
    "Classification_Code": 4039,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Physician's Assistant",
    "Classification_Code": 6357,
    "Compensation Grade": 33,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Planner 2",
    "Classification_Code": 1097,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Plumber",
    "Classification_Code": 4005,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Preadmissions Screening Specialist",
    "Classification_Code": 6684,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Print Services Technician",
    "Classification_Code": 3446,
    "Compensation Grade": 16,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Printing Production Coordinator",
    "Classification_Code": 3475,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Procurement & Contract Specialist 1",
    "Classification_Code": 436,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Procurement & Contract Specialist 1",
    "Classification_Code": 436,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Procurement & Contract Specialist 2",
    "Classification_Code": 437,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Procurement & Contract Specialist 3",
    "Classification_Code": 438,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Procurement And Contract Assistant",
    "Classification_Code": 435,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Program Analyst 1",
    "Classification_Code": 860,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Program Analyst 2",
    "Classification_Code": 861,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Program Analyst 3",
    "Classification_Code": 863,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Program Analyst 4",
    "Classification_Code": 863,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Project Manager 1",
    "Classification_Code": 854,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Project Manager 2",
    "Classification_Code": 855,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Project Manager 3",
    "Classification_Code": 856,
    "Compensation Grade": 32,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Psychiatric Social Worker",
    "Classification_Code": 6730,
    "Compensation Grade": 29,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Public Affairs Specialist 1",
    "Classification_Code": 864,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Affairs Specialist 1",
    "Classification_Code": 864,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Affairs Specialist 2",
    "Classification_Code": 865,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Affairs Specialist 3",
    "Classification_Code": 866,
    "Compensation Grade": 31,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Health Educator 1",
    "Classification_Code": 3337,
    "Compensation Grade": 24,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Health Educator 2",
    "Classification_Code": 3338,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Health Nurse 2",
    "Classification_Code": 6339,
    "Compensation Grade": "28N",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Health Toxicologist 1",
    "Classification_Code": 3433,
    "Compensation Grade": 29,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Public Service Representative 2",
    "Classification_Code": 333,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Public Service Representative 3",
    "Classification_Code": 333,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Public Service Representative 4",
    "Classification_Code": 334,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Radiologic Technologist",
    "Classification_Code": 6348,
    "Compensation Grade": 25,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Rehabilitation Instructor For The Blind",
    "Classification_Code": 3333,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Rehabilitation Instructor For The Blind (Entry)",
    "Classification_Code": 3333,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Rehabilitation Therapist",
    "Classification_Code": 6531,
    "Compensation Grade": 24,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Research Analyst 1",
    "Classification_Code": 1115,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Research Analyst 2",
    "Classification_Code": 1116,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Research Analyst 3",
    "Classification_Code": 1117,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Research Analyst 4",
    "Classification_Code": 1118,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Retirement Counselor 1",
    "Classification_Code": 841,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Retirement Counselor 2",
    "Classification_Code": 843,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Revenue Agent 1",
    "Classification_Code": 5110,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Revenue Agent 1",
    "Classification_Code": 5110,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Revenue Agent 2",
    "Classification_Code": 5111,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Revenue Agent 3",
    "Classification_Code": 5113,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Safety Specialist 1",
    "Classification_Code": 1345,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Safety Specialist 2",
    "Classification_Code": 1346,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Scientific Instrument Technician",
    "Classification_Code": 4339,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Seamster",
    "Classification_Code": 9301,
    "Compensation Grade": 15,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Securities Examiner",
    "Classification_Code": 5671,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Shipping Point Inspector 1",
    "Classification_Code": 5450,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Shipping Point Inspector 2",
    "Classification_Code": 5451,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Sign Technician 1",
    "Classification_Code": 4131,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Social Service Assistant",
    "Classification_Code": 6609,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Social Service Specialist 1",
    "Classification_Code": 6613,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Social Services Specialist 2",
    "Classification_Code": 6613,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "State Library Specialist 1",
    "Classification_Code": 351,
    "Compensation Grade": 12,
    "Steps_Removed": 2,
    "Current lowest step": 4,
    "New lowest step": 6
  },
  {
    "Position": "State Library Specialist 2",
    "Classification_Code": 353,
    "Compensation Grade": 18,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "State Procurement Analyst",
    "Classification_Code": 770,
    "Compensation Grade": 30,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Student Office Worker",
    "Classification_Code": 100,
    "Compensation Grade": 7,
    "Steps_Removed": 0,
    "Current lowest step": 9,
    "New lowest step": 9
  },
  {
    "Position": "Supply Specialist 1",
    "Classification_Code": 758,
    "Compensation Grade": 14,
    "Steps_Removed": 2,
    "Current lowest step": 2,
    "New lowest step": 4
  },
  {
    "Position": "Supply Specialist 2",
    "Classification_Code": 759,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Tax Auditor 1",
    "Classification_Code": 5631,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Tax Auditor 1",
    "Classification_Code": 5631,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Tax Auditor 2",
    "Classification_Code": 5633,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Tax Auditor 2",
    "Classification_Code": 5633,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Tax Auditor/Entry",
    "Classification_Code": 5630,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Teaching Assistant",
    "Classification_Code": 3303,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Traffic Survey Interviewer",
    "Classification_Code": 1105,
    "Compensation Grade": 8,
    "Steps_Removed": 2,
    "Current lowest step": 8,
    "New lowest step": 10
  },
  {
    "Position": "Training & Development Specialist 1",
    "Classification_Code": 1338,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Training & Development Specialist 2",
    "Classification_Code": 1339,
    "Compensation Grade": 27,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Transportation Maintenance Coordinator 1",
    "Classification_Code": 4161,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Maintenance Coordinator 2",
    "Classification_Code": 4163,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Transportation Maintenance Specialist 1",
    "Classification_Code": 4151,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Maintenance Specialist 2",
    "Classification_Code": 4153,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Maintenance Specialist 2",
    "Classification_Code": 4153,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Maintenance Specialist Entry",
    "Classification_Code": 4150,
    "Compensation Grade": "14B",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Transportation Services Office Leader",
    "Classification_Code": 333,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Services Representative 1",
    "Classification_Code": 331,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Services Representative 2",
    "Classification_Code": 333,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Telecommunications Specialist 1",
    "Classification_Code": 4166,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Transportation Telecommunications Specialist 2",
    "Classification_Code": 4167,
    "Compensation Grade": 22,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Transporter",
    "Classification_Code": 4403,
    "Compensation Grade": "11B",
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Transporting Mental Health Aide",
    "Classification_Code": 6101,
    "Compensation Grade": 17,
    "Steps_Removed": 4,
    "Current lowest step": 1,
    "New lowest step": 5
  },
  {
    "Position": "Truck Driver 1",
    "Classification_Code": 4401,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Truck Driver 2",
    "Classification_Code": 4403,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Veterans Service Officer",
    "Classification_Code": 799,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Veterans Trust Officer",
    "Classification_Code": 784,
    "Compensation Grade": 23,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Video Producer",
    "Classification_Code": 3176,
    "Compensation Grade": 28,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Vocational Rehabilitation Counselor",
    "Classification_Code": 6647,
    "Compensation Grade": 25,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Vocational Rehabilitation Counselor Entry",
    "Classification_Code": 6646,
    "Compensation Grade": 20,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Vocational Rehabilitation Specialist",
    "Classification_Code": 6648,
    "Compensation Grade": 26,
    "Steps_Removed": 0,
    "Current lowest step": 1,
    "New lowest step": 1
  },
  {
    "Position": "Water Resource Data Technician 1",
    "Classification_Code": 8510,
    "Compensation Grade": 19,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Water Resource Data Technician 2",
    "Classification_Code": 8511,
    "Compensation Grade": 21,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Wildland Fire Dispatcher",
    "Classification_Code": 8364,
    "Compensation Grade": 15,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Wildland Fire Dispatcher Entry",
    "Classification_Code": 8363,
    "Compensation Grade": 11,
    "Steps_Removed": 2,
    "Current lowest step": 5,
    "New lowest step": 7
  },
  {
    "Position": "Wildland Fire Suppression Specialist",
    "Classification_Code": 8355,
    "Compensation Grade": 17,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Wildland Fire Suppression Specialist Entry",
    "Classification_Code": 8354,
    "Compensation Grade": 13,
    "Steps_Removed": 2,
    "Current lowest step": 3,
    "New lowest step": 5
  },
  {
    "Position": "Word Processing Technician 2",
    "Classification_Code": 531,
    "Compensation Grade": 14,
    "Steps_Removed": 2,
    "Current lowest step": 2,
    "New lowest step": 4
  },
  {
    "Position": "Word Processing Technician 3",
    "Classification_Code": 533,
    "Compensation Grade": 16,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  },
  {
    "Position": "Youth Corrections Unit Coordinator",
    "Classification_Code": 6755,
    "Compensation Grade": 23,
    "Steps_Removed": 2,
    "Current lowest step": 1,
    "New lowest step": 3
  }
];
export default classifications;