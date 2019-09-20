export interface FulfillmentRequest {
	responseId: string;
	session: string;
	queryResult: QueryResult;
	originalDetectIntentRequest: OriginalDetectIntentRequest;
}

export interface QueryResult {
	queryText: string;
	parameters: object;
	allRequiredParamsPresent: boolean;
	fulfillmentText: string;
	fulfillmentMessages: FulfillmentMessage[];
	outputContexts: OutputContext[];
	intent: Intent;
	intentDetectionConfidence: number;
	diagnosticInfo: object;
	languageCode: string;
}

export interface OriginalDetectIntentRequest {
	payload: object;
}

export interface Intent {
	name: string;
	displayName: string;
}

export interface FulfillmentMessage {
	text: Text;
}

export interface Text {
	text: string[];
}

export interface OutputContext {
	name: string;
	lifespanCount: number;
	parameters: object;
}
