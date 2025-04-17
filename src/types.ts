export type Candidate = {
	id: string;
	name: string;
	image: string;
};

export type Position = {
	title: string;
	candidates: Candidate[];
};
