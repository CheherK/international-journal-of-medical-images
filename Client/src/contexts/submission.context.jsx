import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const SUBMISSION_STATE_ACTION_TYPES = {
   SET_MANUSCRIPT_ID: 'SET_MANUSCRIPT_ID',
   SET_MANUSCRIPT_DATA: 'SET_MANUSCRIPT_DATA',
   SET_MANUSCRIPT_AUTHORS: 'SET_MANUSCRIPT_AUTHORS',
   SET_MANUSCRIPT_FILES: 'SET_MANUSCRIPT_FILES',
   SET_MANUSCRIPT_COMMENT: 'SET_MANUSCRIPT_COMMENT',
};

const INITIAL_SUBMISSION_STATE = {
   manuscriptId: null,
   manuscriptData: {
      title: "",
      abstract: "",
      keywords: [],
   },
   manuscriptAuthors: [],
   manuscriptFiles: [
      {
         model: {
            order: 0,
            type: 'Manuscript',
            description: "Manuscript file",
            fileName: "",
         },
         file: null,
      }
   ],
   manuscriptComment: "",
};

//as the actual value you want to access
export const SubmissionContext = createContext({
   manuscriptId: null,
   setManuscriptId: () => null,
   manuscriptData: {},
   setManuscriptData: () => null,
   manuscriptAuthors: [],
   setManuscriptFiles: () => null,
   manuscriptFiles: [],
   setManuscriptAuthors: () => null,
   manuscriptComment: [],
   setManuscriptComment: () => null,
});

const submissionReducer = (state, action) => {

   const { type, payload } = action;

   switch (type) {
      case SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_ID:
         return {
            ...state,
            manuscriptId: payload,
         };
      case SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_DATA:
         return {
            ...state,
            manuscriptData: payload,
         };
      case SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_AUTHORS:
         return {
            ...state,
            manuscriptAuthors: payload,
         };
      case SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_FILES:
         return {
            ...state,
            manuscriptFiles: payload,
         };
      case SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_COMMENT:
         return {
            ...state,
            manuscriptComment: payload,
         };
      default:
         throw new Error(`Unhandled type ${type} in submissionReducer`);
   }
};

export const SubmissionProvider = ({ children }) => {
   const [state, dispatch] = useReducer(submissionReducer, INITIAL_SUBMISSION_STATE);
   const { manuscriptId, manuscriptData, manuscriptAuthors, manuscriptFiles, manuscriptComment } = state;

   const setManuscriptId = (newManuscriptId) => {
      dispatch(createAction(SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_ID, newManuscriptId));
   };
   const setManuscriptData = (newManuscriptData) => {
      dispatch(createAction(SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_DATA, newManuscriptData));
   };
   const setManuscriptAuthors = (newManuscriptAuthors) => {
      dispatch(createAction(SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_AUTHORS, newManuscriptAuthors));
   };
   const setManuscriptFiles = (newManuscriptFiles) => {
      dispatch(createAction(SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_FILES, newManuscriptFiles));
   };
   const setManuscriptComment = (newManuscriptComment) => {
      dispatch(createAction(SUBMISSION_STATE_ACTION_TYPES.SET_MANUSCRIPT_COMMENT, newManuscriptComment));
   };

   const value = { manuscriptId, manuscriptData, manuscriptAuthors, manuscriptFiles, manuscriptComment, setManuscriptId, setManuscriptData, setManuscriptAuthors, setManuscriptFiles, setManuscriptComment };

   return <SubmissionContext.Provider value={value}>{children}</SubmissionContext.Provider>;
};