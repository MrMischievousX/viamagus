import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AppIcon,
  ChatIcon,
  GreenUpArrowIcon,
  LogoutIcon,
  RedDownArrowIcon,
  StarIcon,
} from "../svgs";
import { COLORS } from "../constants/colors";
import { EditImg, ProfileImg } from "../images";
import BadgeItem from "../components/BadgeItem";
import { WIDTH } from "../constants/layout";
import { badgeList } from "../constants/data";

const Profile = ({ params }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AppIcon />
        <Text style={styles.heading}>Profile</Text>
        <View style={{ position: "relative" }}>
          <ChatIcon />
          <View style={styles.chatBox}>
            <Text style={styles.chatLabel}>1</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.secondaryBackground }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
        bounces={false}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            backgroundColor: COLORS.whiteText,
            paddingBottom: 28,
          }}
        >
          <View style={styles.userView}>
            <Image source={ProfileImg} style={styles.userImg} />
            <Image source={EditImg} style={styles.userEdit} />
          </View>
          <Text style={styles.name}>Jina Simons</Text>
          <Text style={styles.points}>6000 Pts</Text>
          <Text style={styles.desc}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
          <View style={styles.flexRow}>
            <LogoutIcon />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
          <View style={styles.statView}>
            <StarIcon style={{ position: "absolute", top: -16 }} />
            <View style={styles.statSubView}>
              <View style={styles.statSpace}>
                <Text style={styles.statLabel}>Under or Over</Text>
                <View style={styles.statIcon}>
                  <GreenUpArrowIcon width={32} height={32} />
                  <Text style={styles.statText}>81%</Text>
                </View>
              </View>
              <View style={styles.statSpace}>
                <Text style={styles.statLabel}>Top 5</Text>
                <View style={styles.statIcon}>
                  <RedDownArrowIcon width={32} height={32} />
                  <Text style={styles.statText}>-51%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.spacer} />
        <View>
          <View style={styles.btnView}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.btn,
                {
                  borderBottomColor: isActive
                    ? COLORS.primaryButton
                    : COLORS.whiteText,
                },
              ]}
              onPress={() => setIsActive(true)}
            >
              <Text
                style={[
                  styles.btnText,
                  {
                    color: isActive
                      ? COLORS.primaryButton
                      : COLORS.secondaryText,
                  },
                ]}
              >
                Games played
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.btn,
                {
                  borderBottomColor: !isActive
                    ? COLORS.primaryButton
                    : COLORS.whiteText,
                },
              ]}
              onPress={() => setIsActive(false)}
            >
              <Text
                style={[
                  styles.btnText,
                  {
                    color: !isActive
                      ? COLORS.primaryButton
                      : COLORS.secondaryText,
                  },
                ]}
              >
                Badges
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20, gap: 16 }}>
          {badgeList.map((badge, index) => {
            return <BadgeItem key={badge.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: COLORS.whiteText,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spacer: {
    width: WIDTH,
    backgroundColor: COLORS.secondaryBackground,
    height: 4,
  },
  btn: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-semi",
  },
  userEdit: {
    position: "absolute",
    height: 24,
    width: 24,
    right: 0,
    bottom: 0,
  },
  userImg: {
    width: 75,
    height: 75,
    borderRadius: 75,
    resizeMode: "cover",
  },
  statSpace: {
    width: "47%",
    gap: 14,
  },
  statIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  statSubView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statView: {
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 44,
    borderRadius: 5,
    alignItems: "center",
    position: "relative",
  },
  statText: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "mrt-bold",
    color: COLORS.greyText,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "mrt-semi",
    color: COLORS.secondaryText,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.secondaryText,
    fontFamily: "mrt-medium",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  userView: {
    marginTop: 24,
    alignSelf: "center",
    position: "relative",
  },
  heading: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.secondaryText,
    fontFamily: "mrt-medium",
  },
  chatBox: {
    position: "absolute",
    backgroundColor: COLORS.primaryButton,
    borderRadius: 8,
    width: 16,
    height: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    top: -8,
    right: -4,
  },
  chatLabel: {
    fontSize: 11,
    fontWeight: "400",
    color: COLORS.whiteText,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primaryText,
    marginTop: 12,
    textAlign: "center",
    fontFamily: "mrt-medium",
  },
  points: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.secondaryText,
    marginTop: 8,
    textAlign: "center",
    fontFamily: "mrt-medium",
  },
  desc: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.secondaryText,
    marginTop: 8,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: "mrt-medium",
  },
});

export default Profile;
