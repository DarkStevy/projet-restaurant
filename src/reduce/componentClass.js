const initialStateClass = {
    classSummary: "summaryNone",
    classOverlaySummary: "overlaySummaryNone"
}

export default function componentClass(state = initialStateClass, action = {}) {
    switch(action.type) {
        case 'CLASSSUMMARY':
          return {
            ...state,
            classSummary: action.nameClassSummary,
            classOverlaySummary: action.nameClassOverlaySummary
          }
        default:
          return state
      }
}