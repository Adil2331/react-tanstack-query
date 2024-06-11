import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import { JSX } from "react/jsx-runtime";

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={600}
    height={400}
    viewBox="0 0 600 400"
    backgroundColor="#615c5c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="0" rx="0" ry="0" width="96" height="20" />
    <rect x="28" y="32" rx="0" ry="0" width="57" height="16" />
    <rect x="4" y="68" rx="0" ry="0" width="101" height="17" />
    <rect x="4" y="98" rx="0" ry="0" width="103" height="16" />
    <rect x="3" y="126" rx="0" ry="0" width="103" height="21" />
    <rect x="2" y="166" rx="0" ry="0" width="103" height="19" />
    <rect x="35" y="204" rx="0" ry="0" width="42" height="15" />
    <rect x="31" y="235" rx="0" ry="0" width="54" height="16" />
    <rect x="59" y="211" rx="0" ry="0" width="4" height="0" />
    <rect x="121" y="0" rx="0" ry="0" width="96" height="20" />
    <rect x="140" y="32" rx="0" ry="0" width="57" height="16" />
    <rect x="116" y="68" rx="0" ry="0" width="101" height="17" />
    <rect x="116" y="98" rx="0" ry="0" width="103" height="16" />
    <rect x="115" y="126" rx="0" ry="0" width="103" height="21" />
    <rect x="114" y="166" rx="0" ry="0" width="103" height="19" />
    <rect x="147" y="204" rx="0" ry="0" width="42" height="15" />
    <rect x="143" y="235" rx="0" ry="0" width="54" height="16" />
    <rect x="171" y="211" rx="0" ry="0" width="4" height="0" />
    <rect x="235" y="0" rx="0" ry="0" width="96" height="20" />
    <rect x="254" y="32" rx="0" ry="0" width="57" height="16" />
    <rect x="230" y="68" rx="0" ry="0" width="101" height="17" />
    <rect x="230" y="98" rx="0" ry="0" width="103" height="16" />
    <rect x="229" y="126" rx="0" ry="0" width="103" height="21" />
    <rect x="228" y="166" rx="0" ry="0" width="103" height="19" />
    <rect x="261" y="204" rx="0" ry="0" width="42" height="15" />
    <rect x="257" y="235" rx="0" ry="0" width="54" height="16" />
    <rect x="285" y="211" rx="0" ry="0" width="4" height="0" />
    <rect x="347" y="0" rx="0" ry="0" width="96" height="20" />
    <rect x="366" y="32" rx="0" ry="0" width="57" height="16" />
    <rect x="342" y="68" rx="0" ry="0" width="101" height="17" />
    <rect x="342" y="98" rx="0" ry="0" width="103" height="16" />
    <rect x="341" y="126" rx="0" ry="0" width="103" height="21" />
    <rect x="340" y="166" rx="0" ry="0" width="103" height="19" />
    <rect x="373" y="204" rx="0" ry="0" width="42" height="15" />
    <rect x="369" y="235" rx="0" ry="0" width="54" height="16" />
    <rect x="397" y="211" rx="0" ry="0" width="4" height="0" />
    <rect x="460" y="-1" rx="0" ry="0" width="96" height="20" />
    <rect x="479" y="31" rx="0" ry="0" width="57" height="16" />
    <rect x="455" y="67" rx="0" ry="0" width="101" height="17" />
    <rect x="455" y="97" rx="0" ry="0" width="103" height="16" />
    <rect x="454" y="125" rx="0" ry="0" width="103" height="21" />
    <rect x="453" y="165" rx="0" ry="0" width="103" height="19" />
    <rect x="486" y="203" rx="0" ry="0" width="42" height="15" />
    <rect x="482" y="234" rx="0" ry="0" width="54" height="16" />
    <rect x="510" y="210" rx="0" ry="0" width="4" height="0" />
  </ContentLoader>
);

export default MyLoader;
