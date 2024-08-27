# Prerequisites to Edit the Website

If you are familiar with git, you may skip this section. If not download the following free programs:

1. Github Desktop
2. Visual Studio Code

# Editing Images in Image Carousels

The pictures that appear in the carousels on the Parents page and the Volunteers page are in the public/ParentsImages and public/VolunteerImages respectively. When editing the images, simply add and/or remove pictures from the desired folder. When doing this, the following naming conventions must be respected:

1. Images must be named [Some number].JPG (ex: 9.JPG)
2. The numbers used to name images must go from "1" to the number of images in the folder, without duplicates. If there are 13 images, they must be names 1.JPG, ..., 13.JPG

These rules allow the website to stay front-end only, which simplifies the editing process.

ALL CHANGES MUST BE PUSHED TO THE MAIN BRANCH TO BE EFFECTIVE ON THE WEBSITE.

# Editing Text and Hyperlinks

All text and hyperlinks are editable in the file src/Config.tsx . Further instructions on which variables to edit are present in the file.

# Running the website on your local computer

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
