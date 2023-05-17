import Image from "next/image";
import styles from "./Table.module.scss";
import { Hero, Player } from "@/types";
import { heroes } from "@/heroes";
import PlayerItems from "../PlayerItems/PlayerItems";

type Props = {
  team: Player[];
};

const Table = ({ team }: Props) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.sm} ></th>
            <th className={styles.sm} title="Kills">K</th>
            <th className={styles.sm}  title="Deaths">D</th>
            <th className={styles.sm}  title="Assists">A</th>
            <th className={styles.md} title="Net worth">NET</th>
            <th className={styles.sm} title="Last hits">LH</th>
            <th className={styles.sm} title="Denies">DN</th>
            <th className={styles.sm} title="Gold per minute">GPM</th>
            <th className={styles.sm} title="Experience per minute">XPM</th>
            <th className={styles.md} title="Damage to heroes">DMG</th>
            <th className={styles.md} title="Heal to heroes">HEAL</th>
            <th className={styles.md} title="Building damage">BLD</th>
            <th title="Items at the end of the match">Items</th>
          </tr>
        </thead>
        <tbody>
          {team.map((player) => {
            const hero = heroes.find((hero) => hero.id === player.hero_id);
            return (
              <tr className={styles.row} key={player.hero_id}>
                <td className={styles.cell}>
                  <Image
                    src={hero!.icon}
                    width={32}
                    height={32}
                    title={hero!.localized_name}
                    alt={hero!.localized_name}
                  />
                </td>
                <td className={styles.cell}>{player.kills}</td>
                <td className={styles.cell}>{player.deaths}</td>
                <td className={styles.cell}>{player.assists}</td>
                <td className={styles.cell}>{player.net_worth}</td>
                <td className={styles.cell}>{player.last_hits}</td>
                <td className={styles.cell}>{player.denies}</td>
                <td className={styles.cell}>{player.gold_per_min}</td>
                <td className={styles.cell}>{player.xp_per_min}</td>
                <td className={styles.cell}>{player.hero_damage}</td>
                <td className={styles.cell}>{player.hero_healing}</td>
                <td className={styles.cell}>{player.tower_damage}</td>
                <td className={styles.cell}><PlayerItems player={player} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
