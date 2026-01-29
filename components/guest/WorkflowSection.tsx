import { ArrowRight } from "lucide-react";

export interface Workflow {
  id: string;
  title: string;
  description: string | null;
  nodes: string[];
}

interface WorkflowSectionProps {
  workflows: Workflow[];
}

export function WorkflowSection({ workflows }: WorkflowSectionProps) {
  if (workflows.length === 0) return null;

  return (
    <section id="workflows" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-white font-bold">
          Automation <span className="text-[#F1ab1c]">Workflows</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflows.map((flow) => (
            <div
              key={flow.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl mb-4 leading-tight font-bold text-[#F1ab1c]">{flow.title}</h3>

              {/* Workflow Steps - Vertical Layout */}
              <div className="mb-6 space-y-3 max-h-80 overflow-y-auto">
                {flow.nodes.map((node, index) => (
                  <div key={`${flow.id}-${node}-${index}`} className="flex items-start">
                    <div className="flex items-center justify-center w-6 h-6 bg-[#F1ab1c] text-white text-xs font-bold rounded-full mr-3 flex-shrink-0 mt-2">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg border border-gray-200 text-sm block font-light">
                        {node}
                      </span>
                      {index < flow.nodes.length - 1 && (
                        <div className="ml-3 mt-2 mb-1">
                          <ArrowRight className="w-4 h-4 transform rotate-90 text-[#F1ab1c]" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {flow.description && (
                <p className="text-gray-800 text-sm flex-grow leading-relaxed font-light">
                  {flow.description}
                </p>
              )}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="https://meet.manymangoes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#F1ab1c] hover:bg-[#e8a318] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Build the Magic
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
