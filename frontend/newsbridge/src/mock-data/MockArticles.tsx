import { UnbiasedArticleViewModel } from "../entities/viewmodels/UnbiasedArticleVM";
import { mockComments } from "./MockComments";
import { mockSourceArticles } from "./MockSourceArticles";

export const mockArticles: UnbiasedArticleViewModel[] = [
  {
    id: 1,
    title: "Sample Article Title",
    sources: mockSourceArticles[0],
    comments: mockComments[0],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nunc ut arcu auctor efficitur. Mauris feugiat eros id turpis vestibulum, id vehicula purus scelerisque. Nullam at felis vel lectus venenatis vehicula. Integer fermentum sapien nec lacus ultricies, nec suscipit turpis aliquet. Sed dictum mauris non neque aliquet, ac feugiat lacus sollicitudin. Ut ac magna a justo dictum cursus eget a est. Donec id tellus sit amet nulla tincidunt accumsan vel nec eros.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nunc ut arcu auctor efficitur. Mauris feugiat eros id turpis vestibulum, id vehicula purus scelerisque. Nullam at felis vel lectus venenatis vehicula. Integer fermentum sapien nec lacus ultricies, nec suscipit turpis aliquet.

Curabitur ultricies arcu id lectus consectetur, id luctus libero pellentesque. Donec aliquet magna et urna tempor, nec tristique sem viverra. Nam lacinia turpis et dui tincidunt fermentum. Pellentesque ac turpis non enim auctor dictum non non elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed lectus at elit tincidunt dictum. Duis hendrerit ipsum vel vehicula condimentum.

In ac ligula at lectus sagittis facilisis ut sit amet metus. Aenean pharetra erat at est tincidunt, in feugiat lorem suscipit. Integer mollis viverra nisl, at scelerisque nulla tincidunt vel. Nulla nec velit sit amet purus malesuada pretium. Cras varius, risus nec gravida accumsan, tortor nisl ultricies orci, vel faucibus quam sapien nec metus. Suspendisse feugiat ligula et est porttitor fermentum. Nulla facilisi.

Mauris mattis magna nec eros congue, sed feugiat lorem interdum. Cras consequat ante velit, vitae tincidunt elit malesuada vel. Integer eget risus eu arcu sodales facilisis. Nam id mi non arcu consectetur luctus sit amet non magna. Nulla auctor felis libero, quis posuere turpis dignissim non. Praesent tincidunt nulla nec turpis dignissim, vel auctor ipsum dignissim. Proin vehicula porttitor risus, a hendrerit lorem tempus id. Ut euismod efficitur neque. In vehicula posuere odio.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim sem vel massa vestibulum, sed vulputate eros efficitur. Aliquam erat volutpat. Proin auctor augue at turpis varius volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras lobortis sapien ut dictum sagittis. Nulla dictum, odio id malesuada convallis, sem est accumsan lorem, sed dignissim sem magna non felis. In nec sapien et lacus condimentum rhoncus eget sed nulla. Fusce nec eros et urna feugiat fringilla vel sed est.`,
    imageUrl: null,
    topic: "Sample Topic",
    likeCount: 23,
    genre: "Sample Genre",
    createdAt: "2025-03-18T00:00:00.000Z",
    isBookmarked: false,
    isLiked: false,
    userBiasRating: null,
    audienceBiasRating: 80,
  },
  {
    id: 2,
    title: "Global Market Trends",
    sources: mockSourceArticles[1],
    comments: mockComments[1],
    summary: "A comprehensive look at global market trends.",
    content: "Detailed analysis of global market trends.",
    imageUrl: null,
    topic: "Economy",
    likeCount: 15,
    genre: "Finance",
    createdAt: "2025-03-26T10:00:00Z",
    isBookmarked: false,
    isLiked: false,
    userBiasRating: null,
    audienceBiasRating: 20,
  },
  {
    id: 3,
    title: "Climate Change Insights",
    sources: mockSourceArticles[2],
    comments: mockComments[2],
    summary: "Key insights from the latest climate change report.",
    content: "In-depth details about climate change.",
    imageUrl: null,
    topic: "Environment",
    likeCount: 20,
    genre: "Science",
    createdAt: "2025-03-26T11:00:00Z",
    isBookmarked: true,
    isLiked: true,
    userBiasRating: 50,
    audienceBiasRating: 60,
  },
];