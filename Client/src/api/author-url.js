export const AUTHOR_SAVE_MANUSCRIPT = (id) => "api/authors/" + id + "/manuscripts/save";
export const SAVE_MANUSCRIPT_FILE = (idAuth, idManu) => "api/authors/" + idAuth + "/manuscripts/" + idManu + "/items/save";
export const SAVE_MANUSCRIPT_COMMENT = (idAuth, idManu) => "api/authors/" + idAuth + "/manuscripts/" + idManu + "/comments/save";