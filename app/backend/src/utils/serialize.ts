import { awayMatches, homeMatches } from '../protocols/ITeamLeaderboard';

/* export default {
  serializeHomeMatch: (matches: homeMatches[]) => (
    matches.map((element) => {
      const { id, teamName, matchHome } = element;

      return { id, teamName, matches: matchHome };
    })),
  serializeAwayMatch: (matches: awayMatches[]) => (
    matches.map((element) => {
      const { id, teamName, matchAway } = element;

      return { id, teamName, matches: matchAway };
    })),
}; */

export default class Serialize {
  static homeMatch = (matches: homeMatches[]) => (
    matches.map((element) => {
      const { id, teamName, matchHome } = element;

      return { id, teamName, matches: matchHome };
    })
  );

  static awayMatch = (matches: awayMatches[]) => (
    matches.map((element) => {
      const { id, teamName, matchAway } = element;

      return { id, teamName, matches: matchAway };
    })
  );
}
