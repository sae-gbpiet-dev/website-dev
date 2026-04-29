export type TeamGroup = "leadership" | "tsr" | "uav" | "media";

export interface TeamMember {
  profileImage: string;
  name: string;
  designation: string;
  email: string;
  linkedin: string;
  instagram: string;
  group: TeamGroup;
}

export interface TeamVideo {
  title: string;
  videoUrl: string;
  group: "tsr" | "uav" | "events";
}

export function getGoogleDriveFileId(url: string) {
  const trimmedUrl = url.trim();
  const fileMatch = trimmedUrl.match(/\/d\/([^/]+)/);
  const openMatch = trimmedUrl.match(/[?&]id=([^&]+)/);

  return fileMatch?.[1] || openMatch?.[1] || "";
}

export function getGoogleDriveImageUrl(urlOrId: string, size = 900) {
  const fileId = getGoogleDriveFileId(urlOrId) || urlOrId.trim();

  if (!fileId) {
    return "";
  }

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
}

export function getGoogleDrivePreviewUrl(url: string) {
  const fileId = getGoogleDriveFileId(
    url.replace(/^hhttps:\/\//, "https://"),
  );

  if (!fileId) {
    return "";
  }

  return `https://drive.google.com/file/d/${fileId}/preview`;
}

const rawMembers = [
  {
    profileImage:
      "https://drive.google.com/file/d/1zdEQCujv3-dz1BBiVvto4wXPzhaLIHOS/view?usp=sharing",
    name: "Anubhav Dimri",
    designation: "SAE GBPIET President, Vehicle Dynamic Head (TSR)",
    email: "dimrianubhav123@gmail.com",
    linkedin: "www.linkedin.com/in/anubhav-dimri-96271728a",
    instagram:
      "https://www.instagram.com/dimri__anubhav08?igsh=MXFtZWdsMWx2cTRhag==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/11ashoJXCkvsuBTrSX01Nqb5Y3HZXub6w/view?usp=sharing",
    name: "Anmol Dimri",
    designation: "Team Captain (TSR)",
    email: "anmol290804@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1LLk-nCz5HKLwWA1QAVf61JGkoMYgpSL0/view?usp=sharing",
    name: "Kritesh Purohit",
    designation: "UAV Head",
    email: "kriteshpurohit151021@gmail.com",
    linkedin: "https://www.linkedin.com/in/kritesh-purohit",
    instagram: "",
  },
  {
    profileImage: "",
    name: "Ashmit Rana",
    designation: "TSR Manager, Driver",
    email: "",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1JnC03jNKmv9guSZHOrIme92j0dXNLyOq/view?usp=sharing",
    name: "Priyanshu Dimri",
    designation: "Treasurer (TSR), Co-Driver",
    email: "priyanshu.dimri08@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/priyanshu-dimri?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram:
      "https://www.instagram.com/sarvansh__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1wtRh74wV6wDQt7My01LgXtrRwTCJGWAX/view?usp=sharing",
    name: "Anurag Kumar",
    designation: "Steering Head (TSR)",
    email: "anuragjm5002@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/anurag-kumar-5016962a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram:
      "https://www.instagram.com/anuragkumarsharma021?igsh=MTM1eWYyczhkaXZlYQ==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1KxrC2EGCAWpWKJHhsHSSanVVuzF-FABP/view?usp=sharing",
    name: "Saksham Rawat",
    designation: "Media Head, TSR Vice Captain",
    email: "sakshamrawat1479@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/i_saksham_rawat?igsh=MTQ4bXdhMnZ5cmRsdw==",
  },
  {
    profileImage: "",
    name: "Ankur Sharma",
    designation: "Team Member (UAV)",
    email: "",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1bicTCOD4o5aoVxJsGZ41e0saIPIN6weL/view?usp=sharing",
    name: "Aakash Joshi",
    designation: "Team Member (TSR)",
    email: "aakashjoshi0244@gmail.com",
    linkedin: "http://www.linkedin.com/in/aakash-joshi-42b856306",
    instagram: "https://www.instagram.com/sup.__.aj?igsh=YWZmaW9rMzc1NzJp",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1IOdc8talnzWzh7gBkng5DThge2EA0F7-/view?usp=sharing",
    name: "Aakash Maheshwari",
    designation: "Team Member (TSR)",
    email: "aakashmaheshwari0203@gmail.com",
    linkedin: "www.linkedin.com/in/aakashmaheshwari09",
    instagram: "https://instagram.com/shivamehra",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/14SBRL-WIM4khs_BxhYnPUJduQ1pdI6J0/view?usp=sharing",
    name: "Sanskriti Khugsal",
    designation: "Team Member (TSR)",
    email: "sanskritikhugsal.20745@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/sanskriti-khugsal-39a4b831a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/_.s_a_n_s.k_r_i_t_i._/",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1u-K6yl2l3szTeQD3wWZUxVhewYSpTK_C/view?usp=sharing",
    name: "Nishtha Kanojia",
    designation: "Team Member (TSR)",
    email: "nishthakan26@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/nishtha-kanojia-877202300?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://instagram.com/rahul",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1cikXY6CNzONcO8VXnvlfxp85P7tSl0xT/view?usp=sharing",
    name: "Monika Negi",
    designation: "Team Member (TSR)",
    email: "monikaanegi31@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/monika-negi-9904b5316?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/moni_kanegi10?igsh=dmYyODJwMWN5bjMy",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1XRLKUDxBeeuGgk1Jwxq9t3P36RmE9BD8/view?usp=sharing",
    name: "Tarun Rajput",
    designation: "Team Member (TSR)",
    email: "rajputtarun213@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/125FPd5yAz6mDIajQlaomXf6BHa2ffpbo/view?usp=sharing",
    name: "Anurag Tiwari",
    designation: "Team Member (TSR)",
    email: "anurag700401@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/anurag-tiwari-96b8b73b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/anu.rag8379?igsh=aXkwa2JzMnU5NHI2",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/18wykUFijDik7s99gm8Oe518HKwoaxPf-/view?usp=sharing",
    name: "Akshita Semwal",
    designation: "Team Member (TSR)",
    email: "semwalakshita19@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/akshita-semwal-605b5a362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/akshitasemwal19?igsh=aTl0NDFwMzQ1YW83",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1l9YD4nTRQ6YFCtDBbUuVeZiQ7-vxbGRq/view?usp=sharing",
    name: "Jiveeka Negi",
    designation: "Team Member (TSR)",
    email: "jiveekanegi@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/jiveeka-negi-357333242?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/jiveeka_negi?igsh=dWZqeHYwaWNpOHNv",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1q7ZZnyOcv5Dzyta7ChBybS644moCnwCj/view?usp=sharing",
    name: "Komal Samant",
    designation: "Team Member (TSR)",
    email: "samantkomal59@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1VZhC14MZhE0yZVmwga22pnCaOfkaex6-/view?usp=sharing",
    name: "Vishal Bisht",
    designation: "Team Member (TSR)",
    email: "bishtvishal176@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/vishal-bisht-87876a1b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/1_bisht.ji_1?igsh=emJoZXV3YmUyeXZo",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1ghIGFjLgmgK4DDeFFHUjnpxZrNxlPTw6/view?usp=sharing",
    name: "Dhruv Kothari",
    designation: "Team Member (TSR)",
    email: "dhruv2006kothari@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/dhruv-kothari-21a590262?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1cfvMmq4EyMDlNlJftYK5OFWSQ8iJSTR4/view?usp=sharing",
    name: "Shivang Sharma",
    designation: "Team Member (TSR)",
    email: "shivangsharma612@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/shivang-sharma-6b25b7324?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://drive.google.com/open?id=1cfvMmq4EyMDlNlJftYK5OFWSQ8iJSTR4",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1kxtbD4ti1aI9_dznkPSXEYYgP6Imp55l/view?usp=sharing",
    name: "Shrijee Gupta",
    designation: "Team Member (TSR)",
    email: "shrijee666@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/shrijee-gupta?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/shrijee_ee?igsh=bHNpMmxwNXppeWEw",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1SqGl3U8WxcgOjraXUFBJmzZGBfG1x6Z6/view?usp=sharing",
    name: "Anjali",
    designation: "Team Member (TSR)",
    email: "anjali14007@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/anjali843512?igsh=N243bGE5eXRubXps",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1c77a8pdSuPwIrAI-Nf523Z94fj3ufXae/view?usp=sharing",
    name: "Amar",
    designation: "Team Member (TSR)",
    email: "amarkumar20012008@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/amar-rajput-90b276384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1-E9eqgmuZJLxGi2r13UZhMlVntX_Lrj3/view?usp=sharing",
    name: "Samridhi Chamoli",
    designation: "Team Member (TSR)",
    email: "samridhis.chamoli@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1hzV-llkI5aOIaQ-2R4vB--cpp8v2qcg7/view?usp=sharing",
    name: "Divisha Pandey",
    designation: "Team Member (TSR)",
    email: "divishapandey387@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/divisha.077/?utm_source=ig_web_button_share_sheet",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1Za5g-mKc1NE6-GiNBR9oQH_e55AEMXoV/view?usp=sharing",
    name: "Utkarsh Nautiyal",
    designation: "Team Member (TSR)",
    email: "nautiyalutkarsh39@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/utkarsh-nautiyal-b5348123b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/utkarsh__nautiyal?igsh=MXZyemJ4Y3Q2Ym1teQ==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/10gB2h7Ng3ZZlyQtwZnIyIWtdM_1WQ577/view?usp=sharing",
    name: "Soban Kumar",
    designation: "Team Member (TSR)",
    email: "sobankumar4868@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1x9m57vXzA0zreXZKoDCMXMadbj01eeSi/view?usp=sharing",
    name: "Antriksh Raturi",
    designation: "Team Member (TSR)",
    email: "antriksh.raturi07@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/antriksh-raturi-a73446387?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/antrikshhh__/",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1iwAjn1ZBm7JHKeIa76NWBJi7AuYLCfwJ/view?usp=sharing",
    name: "Srishti Joshi",
    designation: "Team Member (UAV)",
    email: "srishtijoshi0860@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/srishti-joshi-a93aa8390?utm_source=share_via&utm_content=profile&utm_medium=member_android//",
    instagram: "https://www.instagram.com/sisti._.joshi?igsh=ZHV6YW4waXRqaHF1",
  },
  {
    profileImage: "https://drive.google.com/open?id=1rJ4bsp1zSRIFLPgytVA9NBM0mrxZAUE_",
    name: "Shrivriddhi Thapliyal",
    designation: "Team Member (UAV)",
    email: "thapliyalshrivriddhi0219@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/shrivriddhithapliyal?igsh=dmtpbnowZ2p6aHpw",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1drgZyiT3xMrJba231-YfjCdKrAjP5xwt/view?usp=sharing",
    name: "Mohini",
    designation: "Team Member (UAV)",
    email: "mohini.8406@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/moh.ini546?igsh=ZHcwMjMxYjJuMzNy",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1cj-12OJx5oelsoBamZ-o9TpHH2V8GQpH/view?usp=sharing",
    name: "Avni Tyagi",
    designation: "Team Member (UAV)",
    email: "avni.tyagi.mail@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1Aow2qOWWYdSvTBi3MDPT69RwbGKlGX-F/view?usp=sharing",
    name: "Ankisha",
    designation: "Team Member (UAV)",
    email: "ankishaanki05@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/ankisha-bharti-898950386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ankishaaa_?igsh=bTNmM3gyemM0c3d5",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1Zubw7iMqjeJBVImLFJjFQuRYraw4e5_q/view?usp=sharing",
    name: "Mahima Pandey",
    designation: "Team Member (UAV)",
    email: "mahimapandey0601@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/12mkqNusmteAg-tVQgq8JGm8SRZFvamw9/view?usp=sharing",
    name: "Ishant Dimri",
    designation: "Team Member (UAV)",
    email: "ishantdimri@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/ishant-dimri-64b82b317?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/oye__ishant?igsh=MXNobTdhcXg0NWlo",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1jEjWmmM896o8ZY5e0jXYJ_job5mwOvPB/view?usp=sharing",
    name: "Surya Prakash",
    designation: "Team Member (UAV)",
    email: "prakashsurya25314@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/_suryaa.prakash?igsh=MTdqdXZ1NWdhY3dtOQ==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1_bc0YgEr3v1DyL7pbx7CWyMMV5jP5I1k/view?usp=sharing",
    name: "Ayush Purohit",
    designation: "Team Member (UAV)",
    email: "ayushpurohit376@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/ayush_purohitt?igsh=Z3Q0ZHgwNGJoMDR0",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/11IWhBEGfhL032lPvdqXVexJ7zHnwDTXC/view?usp=sharing",
    name: "Sakshi Tanwal",
    designation: "Team Member (Media)",
    email: "tanwalsakshi6@gmail.com",
    linkedin: "",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1x5wm7cxDRlkEq-h8miHhFP6NBGckfBvj/view?usp=sharing",
    name: "Aditya Kumar",
    designation: "Team Member (Media)",
    email: "aadikaliyan@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/aditya-kumar-576105380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/aadi_kalyn?igsh=czY1c3IxbHE3NGh1",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1H-tvLPOyaQR0sQx82ZB9FXWMnFksfTXW/view?usp=sharing",
    name: "Aditya Jaiswal",
    designation: "Team Member (Media)",
    email: "jaiswaladitya1402@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/aditya-jaiswal-3972433b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/jaiswaladitya_0001?igsh=MWZqaGY4cGJoMXpqaQ==",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/1y9ep9qf3hziiAdI-Td9jnEzQ8puaV5KG/view?usp=sharing",
    name: "Kanika Bhatt",
    designation: "Team Member (Media)",
    email: "bhattkanika654@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/kanika-bhatt-912658381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "",
  },
  {
    profileImage:
      "https://drive.google.com/file/d/10zFe8XGMH4crkCngogMik3TxUjpLCF4B/view?usp=sharing",
    name: "Nikita",
    designation: "Team Member (Media)",
    email: "nikitasajwan51@gmail.com",
    linkedin: "",
    instagram: "",
  },
] satisfies Omit<TeamMember, "group">[];

function getGroup(designation: string): TeamGroup {
  if (designation.includes("Media")) {
    return "media";
  }

  if (designation.includes("UAV")) {
    return "uav";
  }

  if (
    designation.includes("President") ||
    designation.includes("Captain") ||
    designation.includes("Head") ||
    designation.includes("Manager") ||
    designation.includes("Treasurer")
  ) {
    return "leadership";
  }

  return "tsr";
}

export const teamMembers: TeamMember[] = rawMembers.map((member) => ({
  ...member,
  group: getGroup(member.designation),
}));

export const tsrMembers = teamMembers.filter(
  (member) => member.designation.includes("TSR") || member.group === "tsr",
);

export const uavMembers = teamMembers.filter((member) =>
  member.designation.includes("UAV"),
);

export const leadershipMembers = teamMembers.filter(
  (member) => member.group === "leadership",
);

export const mediaMembers = teamMembers.filter(
  (member) => member.group === "media",
);

export const teamVideos: TeamVideo[] = [
  {
    title: "BAJA - TSR",
    videoUrl:
      "hhttps://drive.google.com/file/d/1TCfRg5U44JhUoWULi74M4_--AeP51DhA/view?usp=sharing",
    group: "tsr",
  },
  {
    title: "UAV",
    videoUrl:
      "https://drive.google.com/file/d/1SaEzrNa4JYA_hNgq7oPT9-upwNm1LMmp/view?usp=sharing",
    group: "uav",
  },
  {
    title: "UAV2",
    videoUrl:
      "https://drive.google.com/file/d/1GaDcS3dFe2YeEWCBhaoY3qQFRzL0tFMT/view?usp=sharing",
    group: "uav",
  },
  {
    title: "Solidworks Workshop Cadathon 2025-26",
    videoUrl:
      "https://drive.google.com/file/d/1e9WvWzcO2SlNxTWFpMlkR72FpsCgRaWy/view?usp=sharing",
    group: "events",
  },
];
