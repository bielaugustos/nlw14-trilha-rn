import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { View } from "react-native";

export default function Home() {
  return (
<View className="flex-1 pt-8">
<Header title="Faça seu pedido" cartQuantityItems={3}/>
  <View className="flex-row gap-4">
    <CategoryButton title="Lanche do Dia" />
    <CategoryButton title="Lanche do Dia" isSelected/>
    <CategoryButton title="Lanche do Dia"/>
  </View>
</View>

  );
}