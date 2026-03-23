import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import Moviecard from "../../../components/Moviecard";
import SearchBar from "../../../components/searchBar";
import { icons } from "../../../constants/icons";
import { images } from "../../../constants/images";
import { fetchMovies } from "../../../services/api";
import useFetch from "../../../services/useFetch";
export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
  );
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>{moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search"
            />
            <>
              <Text className="text-lg text-white font-bold my-5">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperClassName="flex justify-start gap-5 pr-0 mb-10"
                scrollEnabled={false}
                renderItem={({ item }) => <Moviecard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
