import {
  Paper,
  Title,
  Text,
  Divider,
  Image,
  Stack,
  Space,
} from "@mantine/core";

const blogImages = require.context(
  "/public/images/writing/blogs/20200328",
  true
);

function Blog20200328() {
  return (
    <Paper
      p="xl"
      radius="lg"
      withBorder
      shadow="sm"
      mt="lg"
      mx="auto"
      maw={700}
    >
      <Stack gap="md">
        <Title order={1}>3/28/2020: A new beginning</Title>
        <Divider />
        <Title order={2} size="h3">
          It's currently 4:16 AM.
        </Title>
        <Text>
          So I decided that I'll start a blog because reflection is good and I
          guess maybe it'll be a good thing for me in the long-run; documenting
          how I'm doing over time and I can reflect on that later. It's like
          reflecting on reflections; which sounds kind of weird, but I guess
          we're a bit beyond that at this point. I'll pretty much just write the
          first thing that comes to my mind, so maybe a lot of this will be
          gibberish. Who knows? I guess I do, but that's besides the point. I
          should've started this a while back. I won't write something every
          day, but I'll probably write something when I feel like it.
        </Text>
        <Text>
          I guess a lot of stuff has happened in my life. Although one could
          argue that the same amount of things happen to everyone within any
          duration of time, which I accept as a valid argument. I graduated last
          spring and a lot of my friends went on to jobs in industry. Some also
          went to grad school, which is pretty cool. I should probably try to
          stay connected with people more, but for some reason, I always justify
          not doing it by saying that I'm busy or something, which is something
          I should probably work on in the future.
        </Text>
        <Divider />
        <Image
          src={blogImages("./kaohsiung.jpg")}
          alt="a picture of a kaohsiung street at night"
          width="60%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Title order={2} size="h3">
          Summer
        </Title>
        <Text>
          So during the summer, I went back to Taiwan to do an internship at my
          dad's friend's start-up. It was in Taiwan because I got
          rejected/ghosted by all the internships I applied for earlier in the
          year, didn't have any references and I procrastinated on a project
          that a startup wanted me to do as part of their interview process. I
          think I would've been able to finish if I just put time into it, but I
          guess one of my weaknesses is finding time for things that I didn't
          consider to be a priority in terms of what I needed to get done. It
          had to deal with working with technologies that I'd never worked with
          before, which usually involves me reading documentation and I didn't
          find time to do that; which is not super great because I guess all
          projects are like that. For the interviews that I failed, it was the
          first interviewing season I went through, so I wasn't sure what people
          looked for and I didn't have any white-boarding experience.
        </Text>
        <Text>
          There were also times when some interviewer said I was doing something
          was wrong, but I'm pretty sure I wasn't. I spent way too long on some
          earlier section of the interview, so instead of taking the time and
          talking through the logic of why it's actually fine, I got defensive
          and became flustered, then everything went downhill from there. I
          guess that's life though and it's definitely a learning experience.
        </Text>
        <Image
          src={blogImages("./boba.jpg")}
          alt="a large pitcher of boba"
          width="30%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Text>
          Anyways, back to the summer. It was the first time that I went back to
          Taiwan in about 10 years and my mom's side of the family lives in
          Taiwan, so it's been a while. If you know me, you'll probably know
          that my Mandarin isn't very great, but I understand enough of it to
          follow most conversations. I also avoid speaking Mandarin because of
          self-consicousness issues, but I should probably just get over it.
          Anyways, I hung out with them during gatherings and they were all
          pretty chill. I appreciate that my mom dragged me outside to do things
          with her even though at the time I just wanted to stay home and work
          on projects or something. I met some people that were pretty cool and
          got some boba. My mom ended up dragging me to a lot of dinners with
          her friends and she says she didn't have a lot of friends, but she
          actually did.
        </Text>
        <Text>
          Then during the internship, I worked on developing some backend stuff
          for monitoring website/service health, since their company was sort of
          based on alerting customers when their websites/services were down and
          I learned stuff about kafka and elasticsearch. They were all pretty
          chill and their English was actually really good, even though they
          pretty much didn't use English except around me. They had team
          meetings in Mandarin though, which I generally understood. There was
          something really janky with their wifi though and I got disconnected
          every few minutes. There was also a point in time when I tried pinging
          Google from some server based in China to test something I wrote
          before remembering that Google is blocked in China. Everyone was cool
          and it was interesting working on a team with people that had varied
          backgrounds.
        </Text>
        <Text>
          They also wanted to do some things with machine learning, but I don't
          think the things that they had set up was conducive for that. They
          wanted to predict/recognize when there were outages/crashes instead of
          just spikes, but the only information that they had for that was the
          actual measurements and nothing additional like user usage patterns or
          user statistics. Although I guess the some parts of ML and big data is
          recording a lot of things and then doing some sort of
          classification/regression, so a lot of information is needed. Anyways,
          I set up some rtmp monitoring service, set up my own
          Zookeeper+Kafka+Elasticsearch setup and some HTTP end-points for some
          Linux networking tools/functions. As a sidenote, Taiwan got some
          things right, like bubble tea was around two USD and lunches were
          around 3-4 USD; although the cost of living and minimum wage is less,
          so I guess my views on the prices are a bit biased.
        </Text>
        <Divider />
        <Image
          src={blogImages("./grad_uw.jpg")}
          alt="picture of uw, raining"
          width="30%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Title order={2} size="h3">
          Grad school
        </Title>
        <Text>
          Then when I got back, I started grad school. It was just a masters as
          a part of a combined bs/ms program though. It's sort of like
          undergrad. Not much has changed, but a lot of my friends graduated and
          now I sort of just hang out with people who were also part of the
          bs/ms program and a few undergrads. I started actually preparing for
          interviews properly with some friends and did some leetcode. I guess I
          should get back into it eventually; but my interviews worked out a bit
          better. I'll be interning at Amazon over the summer, assuming it
          doesn't get cancelled over the COVID-19 mess. A lot of companies still
          ghosted me and I guess it's the resume, since it looks rather plain.
          Some friends recommended adding some colors or something and changing
          the font from Consolas to something else; but now it's even plainer,
          so I think I need to fix it somehow.
        </Text>
        <Image
          src={blogImages("./dell_roof.jpg")}
          alt="a picture of rooftop in Seattle"
          width="80%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Text>
          I spent some time with friends and grabbed some food with
          friends/visited friends and went to grab some food with them. I still
          need to finish my Paxos Visualization project. Although there was a
          group that did it for their Data Visualization project, I still want
          to do it myself. I worked on some projects with friends and some other
          friends graduated. There were too many papers to read and math is
          still hard @_@, but I guess that's also just life.
        </Text>
        <Image
          src={blogImages("./dl_worth.jpg")}
          alt="a picture of cats on top of colab"
          width="50%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Text>
          I worked on some distributed Machine Learning thing for live
          inference/training, some adversarial deep learning testing thing, and
          then did a paper survey on federated learning. I still think that
          everything in CS is just math, so there's that. I also TAed a machine
          learning class in Fall, which was pretty fun.
        </Text>
        <Text>
          Then during the winter, I hung out with some friends that graduated
          and we're trying to do a weekly thing where we meet up and grab some
          food in Seattle, but bingo and COVID happened, so we're postponing
          that until when the stay-at-home order is lifted. I TAed Distributed
          Systems and I'm proud to say that I had 20 people come to my office
          hours at some point during the quarter; so that was exciting in terms
          of being a TA, since I think the most I had office hours before then
          was 13. I worked on a solo educational project and tried to make a
          wide FOV VR headset with a friend, but 3D printing didn't work out
          very well and we ended up just going with cardboard. I went to two
          concerts. One was American Authors with PUBLIC and MAGIC GIANT, which
          was fun. I also saw a friend at the concert. Deep Water by American
          Authors is a pretty good song. Then the other was from This Will
          Destroy You and it was definitely sound. I liked it, but it was more
          like music I would like to listen to by myself because I guess it was
          good for thinking. To be honest, I'd describe prog-rock as thinking
          music. Anyways, the quarter ended with COVID-19 things happening and
          take-home finals. The take-home finals were hard and I'm not sure if I
          understood anything by the end. This was also when I started using
          UberEats, since I guess my reasoning was like, "I guess I'll pay 7
          dollars to save on the hour I'd spend going outside to grab food."
        </Text>
        <Text>
          Then we're here. I started doing research in the last week or so of
          Winter quarter, but I can't really call it research because I haven't
          done much yet. Currently I'm working on doing some benchmarking of
          operations in RocksDB, but that isn't too much. I'm also sort of
          procrastinating on that, but I want to enjoy my spring break. I'm
          thinking of redoing my resume in LaTeX eventually. I'm going to TA
          Distributed Systems again, which will be interesting. A lot of
          universities are moving online, so everything's basically Zoom
          University next quarter. Zoom is basically what Skype could've been;
          but never was, which is interesting to think about technology-wise.
          You could say that UW will be competiting against other online
          universities like the University of Phoenix.
        </Text>
        <Image
          src={blogImages("./a_mood.jpg")}
          alt="a picture of rooftop in Seattle"
          width="50%"
          mx="auto"
          radius="md"
          my="md"
        />
        <Text>
          Lastly, I think I spend too much time on cs things and probably too
          much time with cs people. I don't think it's very good when your
          comedic sense or idea of what is "funny" is directly tied to your
          field of study, but I guess that's my life at this point.
        </Text>
      </Stack>
    </Paper>
  );
}

export default Blog20200328;
