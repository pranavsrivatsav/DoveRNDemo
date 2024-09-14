import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import SectionHeader from "../components/SectionHeader";
import OutlinedInputBig from "../components/Preferences/OutlinedInputBig";
import SelectInsurers from "../components/Preferences/SelectInsurers";
import { useDispatch, useSelector } from "react-redux";
import {
  initializePreferences,
  setAlias,
  setInsurerSelection,
} from "../store/slices/preferencesSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import CustomScrollWrapper from "../components/wrappers/CustomScrollWrapper";

export const InsurerPreferencesContext = React.createContext();

const Preferences = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { alias, insurers } = useSelector((state) => state.preferences);
  const actions = useMemo(
    () =>
      bindActionCreators(
        { setInsurerSelection, setAlias, initializePreferences },
        dispatch
      ),
    [dispatch]
  );

  const defaultInsurers = [
    {
      name: "Acko",
      isSelected: false,
    },
    {
      name: "Star Health",
      isSelected: false,
    },
    {
      name: "Bajaj Allianz",
      isSelected: false,
    },
    {
      name: "Hdfc Ergo",
      isSelected: false,
    },
    {
      name: "Acko",
      isSelected: false,
    },
    {
      name: "Star Health",
      isSelected: false,
    },
    {
      name: "Bajaj Allianz",
      isSelected: false,
    },
    {
      name: "Hdfc Ergo",
      isSelected: false,
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    actions.initializePreferences({
      insurers: defaultInsurers,
      alias: "default",
    });
  }, []);

  function renderContent() {
    return (
      <View style={styles.content}>
        <AliasSection value={alias} onChange={actions.setAlias} />
        <InsurerPreferencesSection
          insurers={insurers}
          setSelection={actions.setInsurerSelection}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={"PREFERENCES"} height="15%" />
      {renderContent()}
    </View>
  );
};

function AliasSection({ value, onChange }) {
  return (
    <>
      <SectionHeader title={"SET ALIAS"} />
      <OutlinedInputBig
        placeholder={"What do you want us to call you?"}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

function InsurerPreferencesSection({ insurers, setSelection }) {
  return (
    <View style={{flex: 1}}>
      <SectionHeader title={"SELECT INSURERS"} />
      <CustomScrollWrapper>
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
        <SelectInsurers insurers={insurers} setSelection={setSelection} />
      </CustomScrollWrapper>
    </View>
  );
}

export default Preferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 12,
  },
});
