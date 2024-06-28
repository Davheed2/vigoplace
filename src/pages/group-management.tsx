import Head from "next/head";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Activity from "@/components/Activity";
import CollectionPost from "@/components/GroupManagement/CollectionPosts";
import FamilyGroup from "@/components/GroupManagement/FamilyGroups";
import HobbyGroup from "@/components/GroupManagement/HobbyGroup";
import StudyGroup from "@/components/GroupManagement/StudyGroup";
import SupportGroup from "@/components/GroupManagement/SupportGroup";
import NetworkingGroup from "@/components/GroupManagement/NetworkingGroup";
import Association from "@/components/GroupManagement/Association";
import AlumniGroup from "@/components/GroupManagement/AlumniGroup";
import VolunteerGroup from "@/components/GroupManagement/VolunteerGroup";
import SportTeam from "@/components/GroupManagement/SportTeam";
import BasedCommunities from "@/components/GroupManagement/BasedCommunities";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "500",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});

export default function GroupManagement() {
  return (
    <div className={`${ubuntu.variable} ${nunito.variable}`}>
      <Head>
        <title>Vigoplace - Your Tech Solution</title>
        <meta
          name="description"
          content="Vigoplace offers top-notch tech solutions for your needs."
        />
        <meta name="keywords" content="Tech, Solutions, Services, Vigoplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Activity />
      <CollectionPost />
      <FamilyGroup />
      <HobbyGroup />
      <StudyGroup />
      <SupportGroup />
      <NetworkingGroup />
      <Association />
      <AlumniGroup />
      <VolunteerGroup />
      <SportTeam />
      <BasedCommunities />
    </div>
  );
}
