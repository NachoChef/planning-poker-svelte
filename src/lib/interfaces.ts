import { e } from 'vitest/dist/index-5aad25c1';
import type { UserMap } from './stores/user';

export type Participant = {
	id: string;
	name: string;
	color: string;
	abstaining: boolean;
	vote: number;
};

// synced state
export interface RoomState {
	voting: boolean;
	name: string;
}

export interface LocalState {
	resetVote: boolean;
	tally: number;
}

export type BroadcastEvent = {
	userId: string;
};

export type ManagedState = RoomState & LocalState;

// a room sync will sync all room state
export type RoomSync = RoomState & BroadcastEvent;

export interface UserReaction extends BroadcastEvent {
	reaction: string;
}

export interface UserVote extends BroadcastEvent {
	vote: number;
}

export interface UserUpdate extends BroadcastEvent {
	name: string;
	color: string;
	abstaining: boolean;
}

export interface Rolecall extends BroadcastEvent {
	user: Participant;
}
