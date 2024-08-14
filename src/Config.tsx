// Embedded links for all videos in the MHCPP youtube playlist "Level 1 | MHCPP"
const level1EmbedsEN : string[] = [
    "https://www.youtube.com/embed/Z3InsUjXhw0?si=NZqrnhNuh7JLWzen",
    "https://www.youtube.com/embed/P7FOADLOnwk?si=EuldO2TQ5c63mjhs",
    "https://www.youtube.com/embed/PIQm2YOD60I?si=MB6VP4I3KrS3y_fv",
    "https://www.youtube.com/embed/EAN0BHhsRiE?si=cu16kTZG1wEW30ym",
    "https://www.youtube.com/embed/3JRyHcLZewM?si=utYq21LFa0UXYkFa",
    "https://www.youtube.com/embed/fzfFXm7pWws?si=tQEwRIvcOt_AHFqc",
    "https://www.youtube.com/embed/6c03lT-eiXY?si=iYOpJ_ZTBWEz3eJC"
];

const level1EmbedsFR : string[] = [
    "https://www.youtube.com/embed/fCITbmysS98?si=wuT1p1zEvhXHiPHK",
    "https://www.youtube.com/embed/gEPRGWDz9ZA?si=HXm7YFLDJKLVm6yO",
    "https://www.youtube.com/embed/FZA_xSXECRE?si=vVm0wgV3u1UYCTnF",
    "https://www.youtube.com/embed/G5CcrzppMGI?si=QAATusytRum7U7qW",
    "https://www.youtube.com/embed/wl1sFQzF2wo?si=SHf-v3AnmcF74i3g",
    "https://www.youtube.com/embed/IGj1VNzHoSY?si=XhmzF3m8PWPuIoFv"
];

// Embedded links for all videos in the MHCPP youtube playlist "Level 2 | MHCPP"
const level2EmbedsEN : string[] = [
    "https://www.youtube.com/embed/LzdjKO_trys?si=bXOpeduyPtujChMi",
    "https://www.youtube.com/embed/rLY_XcvF_FU?si=s1p3KnxO8z251V1_",
    "https://www.youtube.com/embed/t_yJY6moTxc?si=bGNhj6POeO140Ikb",
    "https://www.youtube.com/embed/ItmjoAnCN5Q?si=n4J0g5FxK7F3W3LC",
    "https://www.youtube.com/embed/kMHRiJXB67Y?si=WQoqdQgqh1uY_qai",
    "https://www.youtube.com/embed/IeF9pXsQjjA?si=fjSDmicY27FSN34Z"
];

const level2EmbedsFR : string[] = [
    "https://www.youtube.com/embed/LCP8XzRITSM?si=7Xeq-CdeIXWgZFVQ",
    "https://www.youtube.com/embed/0QsMV9wo41M?si=tUbm2pvw1BnMbUob",
    "https://www.youtube.com/embed/uO1XildYNkY?si=8Ww8U8zm-7lu3B4u",
    "https://www.youtube.com/embed/hC42fuexBJ8?si=EeRkZ2H5eBIA9w6R"
];
// Embedded links for all videos in the MHCPP youtube playlist "Level 3 | MHCPP"
const level3EmbedsEN : string[] = [
    "https://www.youtube.com/embed/DmpZw9ikECk?si=a1l8UIwqmRoDT8YP",
    "https://www.youtube.com/embed/89E6XIRReNo?si=xavADX-Gtvt9MfHM",
    "https://www.youtube.com/embed/7BrAaZW0n_k?si=AFM--cI4AR81atXo",
    "https://www.youtube.com/embed/4B3WBfi-12k?si=8aRcQ6qFmtStagTh",
    "https://www.youtube.com/embed/-eXKeXqRp9Q?si=JhQghv_QeH2p1l0O"
];

const level3EmbedsFR : string[] = [
    "https://www.youtube.com/embed/SUgbEqfwUoE?si=RIFCL7g_ZDCsuQSR",
    "https://www.youtube.com/embed/e_CABej7ENE?si=Z25Wejom-TSxwPus",
    "https://www.youtube.com/embed/J6gZ3qoH0ik?si=GoRnRGWt0bewBIom",
    "https://www.youtube.com/embed/rgCR3D9yCF4?si=EAC44DIhRF7Smy9G",
    "https://www.youtube.com/embed/j5u5liodUwk?si=lKAgz--rhB3TCsEZ",
    "https://www.youtube.com/embed/ERdxgmaJYSQ?si=v01pa8tmHmb6XoLk"
];

// ------------- Not to be modified below this line -------------
// Get user's language
var userLang = navigator.language;
if (userLang.includes("fr"))
{
    userLang = "fr";
}
else
{
    userLang = "en";
}


export { userLang, level1EmbedsEN, level2EmbedsEN, level3EmbedsEN, level1EmbedsFR, level2EmbedsFR, level3EmbedsFR };
