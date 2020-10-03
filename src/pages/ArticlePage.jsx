import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";

const article = {
  title: "Lorem Ipsum re loco",
  body: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor ipsum sit amet faucibus hendrerit. Nulla efficitur sem eros. Duis semper egestas dolor vitae dignissim. Quisque quis semper turpis, a pulvinar nulla. Vestibulum at accumsan sapien, sed fermentum elit. In hac habitasse platea dictumst. Proin elementum metus purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam venenatis ex quam, eu interdum enim dictum ut. Donec semper eget erat non congue. Mauris eget tempus odio. Aenean volutpat gravida dui, eget placerat sem imperdiet non. Morbi id ipsum et turpis mollis consequat. Mauris fermentum congue orci, a feugiat lorem ullamcorper in. Nunc vel dolor non est tempus placerat. Praesent gravida dapibus eros, nec iaculis nibh euismod nec.
    
    Quisque ultrices mollis massa id auctor. Mauris et aliquet sem. Praesent dapibus tortor vitae ipsum egestas, in commodo est faucibus. Aenean hendrerit maximus rutrum. Quisque id sapien nec lectus malesuada tincidunt. Vivamus consectetur, enim et vulputate tempus, purus nulla rhoncus neque, ac varius nunc dolor quis lorem. Sed bibendum leo id sollicitudin ultricies. Nunc viverra eleifend ultricies. Nullam vitae congue urna, ut congue nisl. Phasellus turpis magna, dictum eu lectus sit amet, sagittis pretium velit. Etiam volutpat purus eros, eget imperdiet libero fringilla eget. Integer et ultrices dolor, at porta libero. Etiam pellentesque mi sit amet neque posuere varius id at arcu. Aliquam erat volutpat. Suspendisse potenti.
    
    Curabitur vitae risus et augue pellentesque molestie. Cras finibus arcu vel rhoncus varius. Cras faucibus, tortor ac ornare commodo, est felis suscipit risus, in malesuada arcu lacus ac massa. Maecenas ultrices lacinia eros, a bibendum tellus molestie sit amet. Aliquam et sapien mattis, volutpat lorem id, rutrum odio. Donec maximus condimentum orci in tincidunt. Nulla tortor diam, laoreet a scelerisque eget, finibus a arcu. Maecenas libero sem, feugiat laoreet velit vitae, convallis tincidunt tortor. Donec tortor dolor, dictum ultricies mauris id, pulvinar gravida mauris.
    
    Donec vitae mi in sapien fringilla molestie. Aenean eu ipsum viverra, malesuada massa et, dignissim metus. Phasellus felis est, consectetur et maximus vitae, eleifend vel massa. Nam neque ipsum, ornare non est quis, dictum scelerisque odio. Aenean nec fermentum massa. Proin dui ligula, hendrerit eget rutrum imperdiet, ultrices id felis. Cras sed ante et ante faucibus finibus. Suspendisse commodo, eros id dapibus aliquet, urna diam posuere nunc, placerat lacinia turpis libero vel ante. In egestas volutpat justo at luctus. Nulla facilisi. Integer dictum urna vitae arcu finibus, ut elementum mauris consectetur. Duis placerat, odio nec fringilla venenatis, est lacus dictum erat, quis congue eros erat vitae elit. Nam in odio venenatis, mattis est id, tincidunt diam. Praesent sem metus, semper tristique diam in, interdum aliquam augue. Integer sed tristique ipsum, vel malesuada magna.
    
    Maecenas consectetur enim nulla, quis condimentum purus vulputate id. Ut ornare cursus odio et consectetur. Maecenas sit amet nisi luctus, fermentum tortor in, rhoncus orci. Vivamus et mi nec tellus condimentum mollis eu eu lacus. Vivamus lobortis mi et lacus eleifend ultricies eget nec lacus. Vestibulum quis tellus leo. Pellentesque vel euismod mauris. Praesent ultricies lacinia lacinia. Mauris eget pulvinar diam, ut faucibus felis. Nulla rutrum accumsan ligula, nec commodo odio aliquet vitae. Quisque ac turpis convallis, auctor mauris vel, pellentesque erat. Nullam vitae lorem ac elit accumsan tempor. Ut hendrerit blandit libero, eget elementum mauris varius vel. Sed lacinia molestie vestibulum. Duis velit libero, fringilla non porta ut, tincidunt eget nisi. `,
};
export default function ArticlePage() {
  let { id } = useParams();
  
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item container direction="column" spacing={2}>
              <Grid item>{article.title}</Grid>
              <Grid item>{article.body}</Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
