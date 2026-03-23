import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants/icons";

const Moviecard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placeholder.com/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm mt-1" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-x-1 justify-start mt-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-sm text-white">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <Text className="text-sm text-gray-500">
          {release_date?.split("-")[0]}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Moviecard;
