const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";

export function getResumeDownloadUrl() {
  try {
    const url = new URL(RESUME_URL, window.location.origin);

    if (url.hostname === "drive.google.com") {
      const fileId = url.pathname.match(/\/file\/d\/([^/]+)/)?.[1] ??
        url.searchParams.get("id");

      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`;
      }
    }
  } catch {
    return RESUME_URL;
  }

  return RESUME_URL;
}