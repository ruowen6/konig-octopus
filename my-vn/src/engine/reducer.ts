import type { Story } from "./types";

export type GameState = {
  nodeId: string;
};

export type GameAction =
  | { type: "START"; story: Story }
  | { type: "NEXT"; story: Story }
  | { type: "CHOOSE"; to: string };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START":
      return { nodeId: action.story.start };

    case "NEXT": {
      const node = action.story.nodes[state.nodeId];
      if (!node?.next) return state;
      return { nodeId: node.next };
    }

    case "CHOOSE":
      return { nodeId: action.to };

    default:
      return state;
  }
}
