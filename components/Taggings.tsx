import { useMdxComponentsContext } from '../context/mdxContext';

const Taggings: React.FC = () => {
  const taggings = useMdxComponentsContext().taggings;
  return (
    <>
      <ol>
        {taggings.map((tagging, index) => (
          <li key={index}>{tagging}</li>
        ))}
      </ol>
    </>
  );
};

export default Taggings;
