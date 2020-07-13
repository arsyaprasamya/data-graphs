export const initialState = {
	loading: true,
	graphs: [],
	errorMessage: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_GRAPHS_REQUEST':
			return {
				...state,
				loading: true,
				errorMessage: null,
			};
		case 'SEARCH_GRAPHS_SUCCESS':
			return {
				...state,
				loading: false,
				graphs: action.payload,
			};
		case 'SEARCH_GRAPHS_FAILURE':
			return {
				...state,
				loading: false,
				errorMessage: action.error,
			};
		default:
			return state;
	}
};
