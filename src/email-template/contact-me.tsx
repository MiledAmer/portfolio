import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";

export default function ContactMe({
  email,
  content,
  name,
  subject,
}: {
  email: string;
  content: string;
  name: string;
  subject: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>SOMEONE CONTACTED YOU</Text>
            <Text style={paragraph}>Email: {email}</Text>
            <Text style={paragraph}>name: {name}</Text>
            <Text style={paragraph}>subject: {subject}</Text>
          </Section>
          <Section style={paragraphList}>
            <Text style={paragraph}>
              <b>
                Content: <br />
              </b>
              {content}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};
